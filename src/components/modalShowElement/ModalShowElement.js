import React from 'react';
import './ModalShowElement.css';

const ModalShowElement = ({ show, onClose, item, type }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h1>Titulo original: {item.titulo_original}</h1>
        <h3>Titulo en español: {item.titulo_español}</h3>
        <div className='imadiv'>
          <img src={item.cartelera} height="200" width="400" alt={`Portada de ${item.titulo_original}`} />
        </div>
        <p>Año de salida: {item.año}</p>
        {item.director && <p>Director: {item.director}</p>}
        {item.duracion && item.duracion !== "proximamente" && <p>Duración: {item.duracion}</p>}
        {item.productora && <p>Productora: {item.productora}</p>}
        {item.temporadas > 0 && <p>Temporadas: {item.temporadas}</p>}
        {item.capitulos > 0 && <p>Capitulos: {item.capitulos}</p>}
        <p>Calificacion: {item.calificacion}</p>
        <p className='description'>Descripcion: {item.descripcion}</p>
      </div>
    </div>
  );
};

export default ModalShowElement;

