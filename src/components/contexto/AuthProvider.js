import { createContext, useEffect, useState, useContext, useReducer } from "react";
import axios from 'axios';

const AuthContext = createContext();

const authReducer = (state, action) => {
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

  const initialState = {
    isAuthenticated: false,
    usu: null,
    token: null,
    loginError: null
};

const [state, dispatch] = useReducer(authReducer, initialState);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
  }
  setLoading(false);
}, []);

const login = async (email, password) => {
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

const register = async (email, password, username) => {
    try {
      let films = [], tvshow = [], anime = []
        const response = await axios.post('http://localhost:3000/register', { email, password, username, permissions: 0, myList: { films, tvshow, anime}});
        const { accessToken, user } = response.data;
        localStorage.setItem('token', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: 'REGISTER_SUCCESS', payload: { user, accessToken } });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAILED', payload: error.response.data || 'Error en el registro' });
    }
  };

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usu');
    dispatch({ type: 'LOGOUT' });
};

const getToken = () => {
    return state.token;
};

    

    return (
        <AuthContext.Provider value={{login, register, logout, getToken, state, loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);