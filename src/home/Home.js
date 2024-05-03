import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../components/contexto/AuthProvider';
import './Home.css';

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
          <div></div>
          <Link to="/homelist" className='link'><h1>MYENTERTAINMENTLIST</h1></Link>
          <Link to="/perfil" className='link'>Mi perfil</Link>
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