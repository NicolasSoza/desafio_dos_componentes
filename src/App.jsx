import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './componentes/Formulario';
import Alert from './componentes/Alert';
import Registro from './componentes/Registro';

function App(props) {
  const [mensaje, setMensaje] = useState('');

  const handleRegistroExitoso = () => {
    setMensaje('¡Registro exitoso!');
  };

  const handleCamposVacios = () => {
    setMensaje('¡Por favor, completa todos los campos!');
  };

  return (
    <div className="App">
      <h1>Crea una cuenta</h1>
      <h5>O usa tu email para registrarte</h5>
      
      <Registro
        onRegistroExitoso={handleRegistroExitoso}
        onCamposVacios={handleCamposVacios}
      />
      
<Alert mensaje={mensaje} tipo="success" />




    </div>
  );
}

export default App;
