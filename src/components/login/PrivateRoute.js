import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexto/AuthProvider';

function PrivateRoute({ children }) {
  const { state } = useAuth();

  // Redirige al usuario no autenticado a la página de inicio de sesión
  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;