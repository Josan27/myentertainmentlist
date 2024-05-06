import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import LoginForm from './components/login/LoginForm';
import PrivateRoute from './components/login/PrivateRoute';
import RegisterForm from './components/login/RegisterForm';
import Nosotros from './components/rutas/Nosotros';
import ErrorComponent from './components/rutas/ErrorComponent';
import Home from './components/home/Home';
import HomeList from './components/homelist/HomeList';


function App() {

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
