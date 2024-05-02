import React, { useState } from 'react';
import './Cambiador.css'

function BotonCambio({children}) {
  const [tema, setTema] = useState(false);
  

  function alternarTema() {
    if (tema === true) {
      setTema(false);
    } else {
      setTema(true);
    }
  }

  let className;

  if (tema === true) {
    className = 'dark-theme';
  } else {
    className = 'light-theme';
  }

  let buttonText;
  if (tema === true) {
    buttonText = 'Cambiar a Tema Claro';
  } else {
    buttonText = 'Cambiar a Tema Oscuro';
  }

  return (
    <div className={className}>
        {children}
      <button onClick={alternarTema}>{buttonText}</button>
      </div>
  );
}

export default BotonCambio;

