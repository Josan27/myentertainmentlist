import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../../components/contexto/AuthProvider';
import './Home.css';
import React from 'react';
import PopoverMenu from '../menuUser/PopoverMenu ';

function Home() {
  const { logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault(); // Evita que Link redireccione, lo hará la protección de ruta.
    logout();
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