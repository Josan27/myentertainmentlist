import React, { useState } from 'react';
import './Anime.css'

const AnimeNext = ({ animeNext }) => {
  
  return (
    
    <div className="portada" key={animeNext.id} >
      <img src={animeNext.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${animeNext.titulo_español}`} />
      <p>{animeNext.titulo_español}</p>
    </div>
  );
}

export default AnimeNext;