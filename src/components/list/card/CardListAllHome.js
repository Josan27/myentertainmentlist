import React, { useState } from 'react';
import './CardListAllHome.css';
import ModalComponent from '../../modalAddList/ModalAddList'; 
import { useAuth } from '../../contexto/AuthProvider';
import { addToUserList } from '../../../api/myentertainmentlistApi'; 

const CardsListAllHome = ({ list, type, onDelete }) => {
  const { state } = useAuth();
  const [showModal, setShowModal] = useState(false);
  let getType = type;
  if(getType.includes("films")){
    getType = "films"    
  }else if(getType.includes("tvshow")){
    getType = "tvshow"    
  }else if(getType.includes("anime")){
    getType = "anime"
  }

  const handleAddToMyList = () => {
    setShowModal(true);
  };

  const handleSave = async (newItem) => {
    const userId = state.user.id; 
    const response = await addToUserList(userId, getType, newItem);

    if (!response.error) {
      console.log('Elemento agregado a la lista personal del usuario');
    } else {
      console.error('Error al agregar elemento a la lista personal del usuario:', response.data);
    }
    setShowModal(false);
  };

  return (
    <div className="portadaAll" key={list.id}>
      <h1>Titulo original: {list.titulo_original}</h1>
      <h3>Titulo en español: {list.titulo_español}</h3>
      <div className='imadiv'>
        <img src={list.cartelera} height="200" width="400" alt={`Portada de ${list.titulo_original}`} />
      </div>
      <p>Año de salida: {list.año}</p>
      {list.director && <p>Director: {list.director}</p>}
      {list.duracion && list.duracion !== "proximamente" && <p>Duración: {list.duracion}</p>}
      {list.productora && <p>Productora: {list.productora}</p>}
      {list.temporadas > 0 && <p>Temporadas: {list.temporadas}</p>}
      {list.capitulos > 0 && <p>Capitulos: {list.capitulos}</p>}
      <p>Calificacion: {list.calificacion}</p>
      <p className='description'>Descripcion: {list.descripcion}</p>
      <button className="cardboton" onClick={handleAddToMyList}>Agregar a mi lista</button>
      {state.user?.permissions === 1 && (
        <>
          <button className="cardboton" onClick={() => onDelete(list.id, type)}>Eliminar</button>
        </>
      )}

      <ModalComponent
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        item={list}
        type={type}
      />
    </div>
  );
};

export default CardsListAllHome;