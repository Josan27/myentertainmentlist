import React, { useState } from 'react';
import './Anime.css'

const AnimeNote = ({ animeNote }) => {
  
  return (
    
    <div className="portada" key={animeNote.id} >
      <img src={animeNote.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${animeNote.titulo_español}`} />
      <p>{animeNote.titulo_español}</p>
    </div>
  );
}

export default AnimeNote;