import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import LoginForm from './components/login/LoginForm';
import PrivateRoute from './components/login/PrivateRoute';
import RegisterForm from './components/login/RegisterForm';
import { useAuth } from './components/contexto/AuthProvider';
import {Link } from 'react-router-dom';
import Nosotros from './components/rutas/Nosotros';
import ErrorComponent from './components/rutas/ErrorComponent';
import BotonCambio from './components/botonCambio/BotonCambio';


function App() {

  const { logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault(); // Evita que Link redireccione, lo hará la protección de ruta.
    logout();
  };

  return (
    <BrowserRouter>
      <nav>
        <li><Link to="/" onClick={handleLogout}>Cerrar Sesión</Link></li>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/registro" element={<RegisterForm/>}/>
        <Route path="/" exact element={<><PrivateRoute>
          <div className="App">
            <p>hola</p>
          </div>
        </PrivateRoute></>}/>
        <Route path="/nosotros" element={<PrivateRoute><Nosotros/></PrivateRoute>} />
        <Route path="*" element={<ErrorComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
