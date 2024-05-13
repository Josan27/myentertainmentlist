import React from 'react';
import './CardListAllHome.css';

const CardsListAllHome = ({ list }) => {
  
  return (
    
    <div className="portadaAll" key={list.id}>
      <h1>Titulo original: {list.titulo_original}</h1>
      <h3>Titulo en español: {list.titulo_español}</h3>
      <div className='imadiv'><img src={list.cartelera} height="200" width="400" alt={`Portada de ${list.titulo_original}`} /></div>
      <p>Año de salida: {list.año}</p>
      {list.director && <p>Director: {list.director}</p>}
      {list.duracion && <p>Duración: {list.duracion}</p>}
      {list.productora && <p>Productora: {list.productora}</p>}
      {list.temporadas && <p>Temporadas: {list.temporadas}</p>}
      {list.capitulos && <p>Capitulos: {list.capitulos}</p>}
      <p>Calificacion: {list.calificacion}</p>
      <p className='description'>Descripcion: {list.descripcion}</p>
   
    </div>
  );
}

export default CardsListAllHome;