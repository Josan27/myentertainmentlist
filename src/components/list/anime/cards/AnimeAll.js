import React, { useState } from 'react';
import './Anime.css'

const AnimeAll = ({ animeAll }) => {
  
  return (
    
    <div className="portada" key={animeAll.id} >
      <img src={animeAll.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${animeAll.titulo_español}`} />
      <p>{animeAll.titulo_español}</p>
    </div>
  );
}

export default AnimeAll;