import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexto/AuthProvider';
import { validateEmail } from './validation';

import './Form.css';
import './RegisterForm.css';

  function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const {register, state} = useAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!email || !password || !username) {
        setError('Por favor, complete todos los campos');
        return;
      }
  
      if (password !== password2) {
        setError('Las contraseñas no coinciden.');
        return;
      }
  
      if (!validateEmail(email)) {
        setError('El email no es válido');
        return;
      }
      register(email, password, username);
    };
  
    useEffect(() => {
      console.log(state);
      if (state.isAuthenticated) {
        navigate('/');
      }
      if (state.loginError) {
        setError(state.loginError);
      }
    }, [state, navigate]);
  
    useEffect(() => {
      setError('');
    }, [email, password, password2, username]);
  
    return (
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Crear cuenta</h2>
          <div className="form-control">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Repetir Contraseña</label>
            <input
              type="password"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          {error && <div className="form-error">{error}</div>}
          <div className="form-control">
            <button type="submit">Registrarse</button>
          </div>
          <div className="link-container">
            <Link to="/login" className="link">¿Ya tienes cuenta? Inicia sesión</Link>
          </div>
        </form>
      </div>
    );
  }
  
export default RegisterForm;
  
