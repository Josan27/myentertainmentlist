import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../../components/contexto/AuthProvider';
import './Home.css';
import React from 'react';
import PopoverMenu from '../menuUser/PopoverMenu ';

/*
El componente Home es la página principal de la aplicación que 
incluye un encabezado, un área de contenido principal y un pie de página. 
Maneja la navegación y el cierre de sesión del usuario.
*/

function Home() {
  const { logout } = useAuth();  // Obtiene la función de cierre de sesión del contexto de autenticación

  const handleLogout = (e) => {
    e.preventDefault();  // Evita que el enlace redirija
    logout();  // Llama a la función de cierre de sesión
  };

  return (
    <div className="home">
      <header>
        <nav className='navheader'>
          <div className='invisible'>MYENTERTAINMENTLIST</div>
          <Link to="/homelist" className='link titulo'><h1>MYENTERTAINMENTLIST</h1></Link>
          <div className='link perfil'><PopoverMenu/></div>
        </nav>
      </header>
      <div className="container">
        
        <main className="content">
          <Outlet />
        </main>
        
      </div>
      <footer className="bar">
          <nav className='navfooter'>

              <Link to="/nosotros" className='link'>Nosotros</Link>
              <Link to="/" onClick={handleLogout} className='link'>Cerrar Sesión</Link>
            
          </nav>
      </footer>
    </div>
  );
}

export default Home;