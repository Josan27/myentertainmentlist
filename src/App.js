import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import LoginForm from './components/login/LoginForm';
import PrivateRoute from './components/login/PrivateRoute';
import RegisterForm from './components/login/RegisterForm';
import Nosotros from './components/rutas/Nosotros';
import ErrorComponent from './components/rutas/ErrorComponent';
import Home from './components/home/Home';
import HomeList from './components/homelist/HomeList';

import ListAllHome from './components/list/list/ListAllHome';


function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/registro" element={<RegisterForm/>}/>
        <Route path="/" exact element={<PrivateRoute><Home/></PrivateRoute>}>
          <Route path="/filmslistall/:type" element={<PrivateRoute><ListAllHome/></PrivateRoute>} />
          <Route path="/tvshowlistall/:type" element={<PrivateRoute><ListAllHome/></PrivateRoute>} />
          <Route path="/animelistall/:type" element={<PrivateRoute><ListAllHome/></PrivateRoute>} />
          <Route path="/filmsnoteall/:type" element={<PrivateRoute><ListAllHome/></PrivateRoute>} />
          <Route path="/tvshownoteall/:type" element={<PrivateRoute><ListAllHome/></PrivateRoute>} />
          <Route path="/animenoteall/:type" element={<PrivateRoute><ListAllHome/></PrivateRoute>} />
          <Route path="/filmsnextall/:type" element={<PrivateRoute><ListAllHome/></PrivateRoute>} />
          <Route path="/tvshownextall/:type" element={<PrivateRoute><ListAllHome/></PrivateRoute>} />
          <Route path="/animenextall/:type" element={<PrivateRoute><ListAllHome/></PrivateRoute>} />
          <Route path="/homelist" element={<PrivateRoute><HomeList/></PrivateRoute>} />
          <Route path="/nosotros" element={<PrivateRoute><Nosotros/></PrivateRoute>} />
          <Route path="*" element={<ErrorComponent/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
