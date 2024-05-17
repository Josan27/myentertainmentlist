import React, { useState, useEffect } from 'react';
import { getUsers } from '../../api/myentertainmentlistApi';
import { useAuth } from '../contexto/AuthProvider';
import { useNavigate } from 'react-router-dom';
import './SearchUsers.css';

function SearchUsers() {
    const { state } = useAuth(); // Obtiene el estado del contexto de autenticación
    const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el término de búsqueda
    const [users, setUsers] = useState([]); // Estado para almacenar la lista completa de usuarios
    const [filteredUsers, setFilteredUsers] = useState([]); // Estado para almacenar la lista de usuarios filtrados
    const navigate = useNavigate();

    // Efecto para obtener la lista de usuarios al montar el componente
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const usersData = await getUsers(); // Llama a la API para obtener los usuarios
          setUsers(usersData); // Guarda los usuarios en el estado
        } catch (error) {
          console.error('Error fetching users', error); 
        }
      };
  
      fetchUsers(); // Llama a la función para obtener los usuarios
    }, []);
  
    // Efecto para filtrar la lista de usuarios cuando cambia el término de búsqueda o la lista de usuarios
    useEffect(() => {
      const filtered = users.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) && // Filtra usuarios por nombre de usuario
        user.username !== state.user.username // Excluye el usuario actual del estado de autenticación
      );
      setFilteredUsers(filtered); // Guarda los usuarios filtrados en el estado
    }, [searchTerm, users, state.user.username]);

    const handleViewProfile = (userId) => {
        navigate(`/listapersonal/${userId}`);
    };
  
    return (
      <div className="user-search-container">
        <h2>Buscar Usuarios</h2>
        <input
          type="text"
          className='buscador'
          placeholder="Buscar por nombre de usuario..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
        />
        <div className="user-list">
          {filteredUsers.map(user => (
            <div key={user.id} className="user-item">
              <img src={user.img} alt={user.username} className="user-img" />
              <div className="user-info">
                <p><strong>Nombre de usuario:</strong> {user.username}</p>
                {/*<p><strong>Email:</strong> {user.email}</p>*/}
              </div>
                <button className="user-button" onClick={() => handleViewProfile(user.id)}>
                    Ver lista personal
                </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default SearchUsers;
