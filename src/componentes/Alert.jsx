import React from 'react';
import Registro from './Registro';


function Alert({ mensaje, tipo }) {
  return (
    <div className={`alert alert-${tipo}`} role="alert">
      {mensaje}
    </div>
  );
}

export default Alert;
