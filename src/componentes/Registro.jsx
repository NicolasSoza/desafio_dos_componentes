import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import React from 'react';
import SocialButton from './SocialButton';




function Registro({ onRegistroExitoso, onCamposVacios }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmContrasena, setConfirmContrasena] = useState('');

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
    if (!nombre || !email || !contrasena || !confirmContrasena) {
      onCamposVacios();
      return;
    }
    // Validar el formato del email y la igualdad de contraseñas aquí si es necesario

    // Procesar el registro
    onRegistroExitoso();
  };


  return (
<div>


        <SocialButton icon="fa-facebook" />
      <SocialButton icon="fa-twitter" />
      <SocialButton icon="faGitHub"/>

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nombre">
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label></Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={handleEmailChange}
        />
      </Form.Group>

      <Form.Group controlId="contrasena">
        <Form.Label></Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa tu contraseña"
          value={contrasena}
          onChange={handleContrasenaChange}
        />
      </Form.Group>

      <Form.Group controlId="confirmContrasena">
        <Form.Label></Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirma tu contraseña"
          value={confirmContrasena}
          onChange={handleConfirmContrasenaChange}
        />
      </Form.Group>

      <p></p>

      <button type="submit">Registrarse</button>
    </Form>


      {/* Aquí puedes pasar los iconos de redes sociales como props */}
   
      {/* Agrega más botones de redes sociales según sea necesario */}
    </div>

  );
}

export default Registro;
