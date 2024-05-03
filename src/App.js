import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import LoginForm from './components/login/LoginForm';
import PrivateRoute from './components/login/PrivateRoute';
import RegisterForm from './components/login/RegisterForm';
import { useAuth } from './components/contexto/AuthProvider';
import Nosotros from './components/rutas/Nosotros';
import ErrorComponent from './components/rutas/ErrorComponent';
import Home from './home/Home';
import HomeList from './homelist/HomeList';


function App() {

  const { logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault(); // Evita que Link redireccione, lo hará la protección de ruta.
    logout();
  };

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/registro" element={<RegisterForm/>}/>
        <Route path="/" exact element={<PrivateRoute><Home/></PrivateRoute>}>
          <Route path="/homelist" element={<PrivateRoute><HomeList/></PrivateRoute>} />
          <Route path="/nosotros" element={<PrivateRoute><Nosotros/></PrivateRoute>} />
          <Route path="*" element={<ErrorComponent/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
