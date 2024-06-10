import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ListaPersonal.css';
import {
  getUserById,
  getUserList,
  getFilmOne,
  getTvshowOne,
  getAnimeOne,
  deleteItemFromUserList,
  updateItemInUserList
} from '../../api/myentertainmentlistApi';
import ModalViewItem from '../modalShowElement/ModalShowElement';
import ModalEditItem from '../modalEditElements/ModalEditElements';
import { useAuth } from '../contexto/AuthProvider'; 

const categories = ['Visto', 'Viendo', 'Por ver', 'Abandonado'];

// Subcomponente Section para mostrar secciones específicas
const Section = ({
  title,
  activeCategory,
  setActiveCategory,
  items,
  handleItemClick,
  handleDeleteItem,
  handleEditItem,
  isOwner
}) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="categories">
      {categories.map(category => (
        <div
          key={category}
          className={`category ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          <h3>{category}</h3>
        </div>
      ))}
    </div>
    <div className="item-list">
      {items.map(item => (
        <div key={item.id} className="item">
          <img 
            src={item.cartelera} 
            alt={item.titulo_original} 
            className="item-img" 
            onClick={() => handleItemClick(item)} 
          />
          <div className="item-info">
            <p><strong>Título:</strong> {item.titulo_original}</p>
            <p><strong>Calificación:</strong> {item.rating}</p>
            {item.viewed !== undefined && (
              <p><strong>Vista:</strong> {item.viewed ? 'Sí' : 'No'}</p>
            )}
            {item.seasonsWatched !== undefined && (
              <p><strong>Temporadas vistas:</strong> {item.seasonsWatched}</p>
            )}
            {item.episodesWatched !== undefined && (
              <p><strong>Episodios vistos:</strong> {item.episodesWatched}</p>
            )}
          </div>
          {isOwner && (
            <div className="item-buttons">
              <button className="item-button edit-button" onClick={() => handleEditItem(item)}>Editar</button>
              <button className="item-button" onClick={() => handleDeleteItem(item.id)}>Borrar</button>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

// Componente principal ListaPersonal
const ListaPersonal = () => {
  const { userId } = useParams(); // Obtener userId de los parámetros de la URL
  const { state } = useAuth(); // Obtener el estado de autenticación del contexto
  const authenticatedUserId = state.user ? state.user.id : null; // Obtener el ID del usuario autenticado
  const [userName, setUserName] = useState(''); // Estado para almacenar el nombre de usuario
  const [activeSection, setActiveSection] = useState('Películas'); // Estado para la sección activa
  const [activeCategory, setActiveCategory] = useState(null); // Estado para la categoría activa
  const [userList, setUserList] = useState({ films: [], tvshow: [], anime: [] }); // Estado para la lista del usuario
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal de vista
  const [itemDetails, setItemDetails] = useState(null); // Estado para los detalles del ítem seleccionado
  const [itemType, setItemType] = useState(''); // Estado para el tipo de ítem seleccionado
  const [showEditModal, setShowEditModal] = useState(false); // Estado para mostrar el modal de edición
  const [editItem, setEditItem] = useState(null); // Estado para el ítem a editar
  const [editValues, setEditValues] = useState(null); // Estado para los valores del ítem a editar

  // Efecto para obtener los datos del usuario al montar el componente
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserById(userId);
      setUserName(user.username);
    };
    fetchUser();
  }, [userId]);

  // Efecto para obtener la lista del usuario al montar el componente
  useEffect(() => {
    const fetchUserList = async () => {
      const list = await getUserList(userId);
      setUserList(list);
    };
    fetchUserList();
  }, [userId]);

  // Función para manejar el clic en un ítem y mostrar sus detalles en un modal
  const handleItemClick = async (item) => {
    try {
      let response;
      let type = '';
      switch (activeSection) {
        case 'Películas':
          response = await getFilmOne(item.id);
          type = 'films';
          break;
        case 'Series':
          response = await getTvshowOne(item.id);
          type = 'tvshow';
          break;
        case 'Animes':
          response = await getAnimeOne(item.id);
          type = 'anime';
          break;
        default:
          return;
      }
      setItemDetails(response);
      setItemType(type);
      setShowModal(true);
    } catch (error) {
      console.error('Error al obtener los detalles del elemento:', error.message);
    }
  };

  // Función para manejar la eliminación de un ítem de la lista del usuario
  const handleDeleteItem = async (itemId) => {
    try {
      let type = '';
      switch (activeSection) {
        case 'Películas':
          type = 'films';
          break;
        case 'Series':
          type = 'tvshow';
          break;
        case 'Animes':
          type = 'anime';
          break;
        default:
          return;
      }

      await deleteItemFromUserList(userId, type, itemId);

      setUserList(prevList => {
        const updatedList = { ...prevList };
        updatedList[type] = updatedList[type].filter(item => item.id !== itemId);
        return updatedList;
      });
    } catch (error) {
      console.error('Error al eliminar el elemento:', error.message);
    }
  };

  // Función para manejar la edición de un ítem de la lista del usuario
  const handleEditItem = async (item) => {
    try {
      let response;
      let type = '';
      switch (activeSection) {
        case 'Películas':
          response = await getFilmOne(item.id);
          type = 'films';
          break;
        case 'Series':
          response = await getTvshowOne(item.id);
          type = 'tvshow';
          break;
        case 'Animes':
          response = await getAnimeOne(item.id);
          type = 'anime';
          break;
        default:
          return;
      }
      setEditValues(item);
      setEditItem(response);
      setItemType(type);
      setShowEditModal(true);
    } catch (error) {
      console.error('Error al obtener los detalles del elemento:', error.message);
    }
  };

  // Función para guardar los cambios realizados en un ítem editado
  const handleSaveEditedItem = async (updatedItem) => {
    let type = '';
    switch (activeSection) {
      case 'Películas':
        type = 'films';
        break;
      case 'Series':
        type = 'tvshow';
        break;
      case 'Animes':
        type = 'anime';
        break;
      default:
        return;
    }

    try {
      const result = await updateItemInUserList(userId, type, updatedItem);
      if (result.error) {
        console.error(result.data);
        return;
      }

      setUserList(prevList => {
        const updatedList = { ...prevList };
        updatedList[type] = updatedList[type].map(item => item.id === updatedItem.id ? updatedItem : item);
        return updatedList;
      });

      setShowEditModal(false);
    } catch (error) {
      console.error('Error al actualizar el elemento en la lista del usuario:', error.message);
    }
  };

  // Función para filtrar los ítems por sección y categoría activa
  const getItemsBySectionAndCategory = () => {
    let items = [];
    switch (activeSection) {
      case 'Películas':
        items = userList.films;
        break;
      case 'Animes':
        items = userList.anime;
        break;
      case 'Series':
        items = userList.tvshow;
        break;
      default:
        break;
    }
    return items.filter(item => item.status === activeCategory);
  };

  const itemsToShow = activeCategory ? getItemsBySectionAndCategory() : [];

  const isOwner = authenticatedUserId && parseInt(authenticatedUserId, 10) === parseInt(userId, 10);

  return (
    <div className="personal-list-page">
      <h1>MYENTERTAINMENTLIST</h1>
      <h2>Lista de {userName}</h2>
      <div className="section-select">
        {['Películas', 'Animes', 'Series'].map(section => (
          <button
            key={section}
            className={`section-button ${activeSection === section ? 'active' : ''}`}
            onClick={() => {
              setActiveSection(section);
              setActiveCategory(null);
            }}
          >
            {section}
          </button>
        ))}
      </div>
      {activeCategory ? (
        <Section
          title={`${activeSection} - ${activeCategory}`}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          items={itemsToShow}
          handleItemClick={handleItemClick}
          handleDeleteItem={handleDeleteItem}
          handleEditItem={handleEditItem}
          isOwner={isOwner}
        />
      ) : (
        <Section
          title={activeSection}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          items={[]}
          handleItemClick={handleItemClick}
          handleDeleteItem={handleDeleteItem}
          handleEditItem={handleEditItem}
          isOwner={isOwner}
        />
      )}
      {showModal && itemDetails && (
        <ModalViewItem 
          show={showModal} 
          onClose={() => setShowModal(false)} 
          item={itemDetails} 
          type={itemType}
        />
      )}
      {showEditModal && editItem && (
        <ModalEditItem 
          show={showEditModal} 
          onClose={() => setShowEditModal(false)} 
          onSave={handleSaveEditedItem} 
          item={editItem} 
          type={itemType} 
          values={editValues} 
          userId={userId}
        />
      )}
    </div>
  );
};

export default ListaPersonal;