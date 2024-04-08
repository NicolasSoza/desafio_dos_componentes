import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Registro from './Registro';


function Formulario(props) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmContrasena, setConfirmContrasena] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorContrasena, setErrorContrasena] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  const handleConfirmContrasenaChange = (event) => {
    setConfirmContrasena(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar el email
    if (!isValidEmail(email)) {
      setErrorEmail('El formato del email no es válido');
      return;
    } else {
      setErrorEmail('');
    }

    // Validar que las contraseñas sean iguales
    if (contrasena !== confirmContrasena) {
      setErrorContrasena('Las contraseñas no coinciden');
      return;
    } else {
      setErrorContrasena('');
    }

    // Si pasa todas las validaciones, puedes procesar el formulario
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Contraseña:', contrasena);
    console.log('Confirmar Contraseña:', confirmContrasena);

    // Aquí puedes enviar los datos del formulario a tu backend o realizar otras acciones necesarias
  };

  // Función para validar el formato del email
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Floating className="mb-3">
        <Form.Control
          id="nombre"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        <label htmlFor="nombre">Nombre</label>
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="email">Email</label>
        {errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control
          id="contrasena"
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={handleContrasenaChange}
        />
        <label htmlFor="contrasena">Contraseña</label>
      </Form.Floating>

      <Form.Floating className="mb-4">
        <Form.Control
          id="confirmContrasena"
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmContrasena}
          onChange={handleConfirmContrasenaChange}
        />
        <label htmlFor="confirmContrasena">Confirmar Contraseña</label>
        {errorContrasena && <p style={{ color: 'red' }}>{errorContrasena}</p>}
      </Form.Floating>



      <div className="button">
        <button type="submit">Registrarse</button>
      </div>
    </Form>
  );
}

export default Formulario;
