import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import LoginForm from './components/login/LoginForm';
import PrivateRoute from './components/login/PrivateRoute';
import RegisterForm from './components/login/RegisterForm';
import Nosotros from './components/rutas/Nosotros';
import ErrorComponent from './components/rutas/ErrorComponent';
import Home from './components/home/Home';
import HomeList from './components/homelist/HomeList';
import FilmsListAll from './components/list/films/listfilmsall/FilmsListAll';
import FilmsNoteAll from './components/list/films/listfilmsall/FilmsNoteAll';
import FilmsNextAll from './components/list/films/listfilmsall/FilmsNextAll';
import TvshowListAll from './components/list/tvshow/listtvshowall/TvshowListAll';
import TvshowNoteAll from './components/list/tvshow/listtvshowall/TvshowNoteAll';
import TvshowNextAll from './components/list/tvshow/listtvshowall/TvshowNextAll';
import AnimeListAll from './components/list/anime/listanimesall/AnimeListAll';
import AnimeNoteAll from './components/list/anime/listanimesall/AnimeNoteAll';
import AnimeNextAll from './components/list/anime/listanimesall/AnimeNextAll';


function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/registro" element={<RegisterForm/>}/>
        <Route path="/" exact element={<PrivateRoute><Home/></PrivateRoute>}>
          <Route path="/filmslistall" element={<PrivateRoute><FilmsListAll/></PrivateRoute>} />
          <Route path="/tvshowlistall" element={<PrivateRoute><TvshowListAll/></PrivateRoute>} />
          <Route path="/animelistall" element={<PrivateRoute><AnimeListAll/></PrivateRoute>} />
          <Route path="/filmsnoteall" element={<PrivateRoute><FilmsNoteAll/></PrivateRoute>} />
          <Route path="/tvshownoteall" element={<PrivateRoute><TvshowNoteAll/></PrivateRoute>} />
          <Route path="/animenoteall" element={<PrivateRoute><AnimeNoteAll/></PrivateRoute>} />
          <Route path="/filmsnextall" element={<PrivateRoute><FilmsNextAll/></PrivateRoute>} />
          <Route path="/tvshownextall" element={<PrivateRoute><TvshowNextAll/></PrivateRoute>} />
          <Route path="/animenextall" element={<PrivateRoute><AnimeNextAll/></PrivateRoute>} />
          <Route path="/homelist" element={<PrivateRoute><HomeList/></PrivateRoute>} />
          <Route path="/nosotros" element={<PrivateRoute><Nosotros/></PrivateRoute>} />
          <Route path="*" element={<ErrorComponent/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
