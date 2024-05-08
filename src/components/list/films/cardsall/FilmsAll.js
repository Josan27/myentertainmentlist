import React from 'react';
import './FilmsAll.css';

const FilmsAll = ({ filmsAll }) => {
  
  return (
    
    <div className="portadaAll" key={filmsAll.id} >
      <h1>Titulo original: {filmsAll.titulo_original}</h1>
      <h3>Titulo en español: {filmsAll.titulo_español}</h3>
      <div className='imadiv'><img src={filmsAll.cartelera} height="200" width="400" alt={`Portada de ${filmsAll.titulo_original}`} /></div>
      <p>Año de salida: {filmsAll.año}</p>
      <p>Director: {filmsAll.director}</p>
      <p>Duracion: {filmsAll.duracion}</p>
      <p>Clasificacion: {filmsAll.clasificacion}</p>
      <p className='description'>Descripcion: {filmsAll.descripcion}</p>
   
    </div>
  );
}

export default FilmsAll;
