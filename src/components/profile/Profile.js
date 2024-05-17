import React from 'react';
import { useAuth } from '../contexto/AuthProvider';
import './Profile.css';

/*
El componente Profile muestra la 
información del perfil del usuario autenticado.
*/

function Profile() {
    const { state } = useAuth();  // Obtiene el estado de autenticación del contexto

    return (
        <div className="perfil-container">
            <h2>Perfil de Usuario</h2>
            <div className="perfil-info">
                <div className="perfil-img">
                    <img src={state.user.img} alt="Imagen de perfil" />
                </div>
                <div className="perfil-details">
                    <p><strong>Nombre de usuario:</strong> {state.user.username}</p>
                    <p><strong>Email:</strong> {state.user.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
