import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthProvider} from './components/contexto/AuthProvider';

/*
Punto de entrada principal de la aplicación que envuelve el 
componente principal App con el AuthProvider 
para proporcionar el contexto de autenticación.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));  // Crea el elemento raíz para renderizar la aplicación
root.render(
  <AuthProvider>  {/* Envuelve la aplicación con AuthProvider para proporcionar el contexto de autenticación */}
    <App />
  </AuthProvider>
);

