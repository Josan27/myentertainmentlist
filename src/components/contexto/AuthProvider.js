import { createContext, useEffect, useState, useContext, useReducer } from "react";
import axios from 'axios';

/*
AuthProvider es un componente que proporciona un contexto de autenticación
para gestionar el estado del usuario autenticado y sus acciones, 
como el inicio de sesión, registro, y cierre de sesión.
*/

const AuthContext = createContext();  // Crea un nuevo contexto para la autenticación

const authReducer = (state, action) => {  // Define el reducer para manejar las acciones de autenticación
    switch (action.type) {
      case 'LOGIN_SUCCESS':
          return { ...state, isAuthenticated: true, user: action.payload.user, token: action.payload.token, loginError: null };
      case 'LOGIN_FAILED':
          return { ...state, isAuthenticated: false, user: null, token: null, loginError: action.payload };
      case 'LOGOUT':
          return { ...state, isAuthenticated: false, user: null, token: null, loginError: null };
      case 'REGISTER_SUCCESS':
          return { ...state, isAuthenticated: true, user: action.payload.user, token: action.payload.token, loginError: null };
      case 'REGISTER_FAILED':
          return { ...state, isAuthenticated: false, user: null, token: null, loginError: action.payload };
      default:
          throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const AuthProvider = ({children}) => {

const initialState = {  // Define el estado inicial de la autenticación
    isAuthenticated: false,
    usu: null,
    token: null,
    loginError: null
};

const [state, dispatch] = useReducer(authReducer, initialState);  // Usa useReducer para manejar el estado de autenticación
const [loading, setLoading] = useState(true);  // Estado de carga para verificar el token inicial

useEffect(() => {  // Efecto para verificar el token almacenado en el almacenamiento local al cargar el componente
const token = localStorage.getItem('token');
  if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
  }
  setLoading(false);
}, []);

const login = async (email, password) => {  // Función para iniciar sesión
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      console.log(response.data);
      const { accessToken, user } = response.data;
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user, accessToken } });
  } catch (error) {
      console.error("Error during login", error);
      dispatch({ type: 'LOGIN_FAILED', payload: error.response.data || 'Error al iniciar sesión' })
  }
};

const register = async (email, password, username) => {  // Función para registrar un nuevo usuario
    try {
      let films = [], tvshow = [], anime = [], img = "/img/user.png"
        const response = await axios.post('http://localhost:3000/register', { email, password, username, img, permissions: 0, myList: { films, tvshow, anime}});
        const { accessToken, user } = response.data;
        localStorage.setItem('token', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: 'REGISTER_SUCCESS', payload: { user, accessToken } });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAILED', payload: error.response.data || 'Error en el registro' });
    }
  };

const logout = () => {  // Función para cerrar sesión
    localStorage.removeItem('token');
    localStorage.removeItem('usu');
    dispatch({ type: 'LOGOUT' });
};

const getToken = () => {  // Función para obtener el token de autenticación
    return state.token;
};

const [filmsAll, setFilmsAll] = useState([]);  // Estado y funciones para manejar diferentes tipos de listas de películas, programas de TV y anime
const [filmsNote, setFilmsNote] = useState([]);
const [filmsNext, setFilmsNext] = useState([]);
const [tvshowAll, setTvshowAll] = useState([]);
const [tvshowNote, setTvshowNote] = useState([]);
const [tvshowNext, setTvshowNext] = useState([]);
const [animeAll, setAnimeAll] = useState([]);
const [animeNote, setAnimeNote] = useState([]);
const [animeNext, setAnimeNext] = useState([]);


    return (
        <AuthContext.Provider value={{login, register, logout, getToken, state, loading, 
        filmsAll, setFilmsAll, filmsNote, setFilmsNote, filmsNext, setFilmsNext,
        tvshowAll, setTvshowAll, tvshowNote, setTvshowNote, tvshowNext, setTvshowNext, 
        animeAll, setAnimeAll, animeNote, setAnimeNote, animeNext, setAnimeNext }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);  // Hook personalizado para usar el contexto de autenticación
