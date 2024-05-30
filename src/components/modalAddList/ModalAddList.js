import React, { useState } from 'react';
import './ModalAddList.css';

const ModalAllList = ({ show, onClose, onSave, item, type }) => {
  const [viewed, setViewed] = useState(false);
  const [rating, setRating] = useState(1);
  const [status, setStatus] = useState("por ver");
  const [seasonsWatched, setSeasonsWatched] = useState(0);
  const [episodesWatched, setEpisodesWatched] = useState(0);

  let getType = type;
  if(getType.includes("films")){
    type= "films"
  }
  
  const handleSave = () => {

    if (rating < 0 || rating > 10) {
        return;
      }
  
      // Validar las temporadas y capítulos
      if (type !== 'films' && (seasonsWatched < 0 || episodesWatched < 0)) {
        return;
      }
  
      // Validar que las temporadas y los capítulos no superen el número total
      if (type !== 'films' && (seasonsWatched > item.temporadas || episodesWatched > item.capitulos)) {
        return;
      }

    const newItem = {
      ...item,
      viewed: type === 'films' ? (viewed ? 1 : 0) : undefined,
      rating,
      status,
      seasonsWatched: type !== 'films' ? seasonsWatched : undefined,
      episodesWatched: type !== 'films' ? episodesWatched : undefined,
    };
    onSave(newItem);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{item.titulo_original}</h2>
        <img src={item.cartelera} alt={`Portada de ${item.titulo_original}`} />

        {type === 'films' && (
          <>
            <label>
              ¿Vista?
              <select value={viewed ? 1 : 0} onChange={(e) => setViewed(e.target.value === "1")}>
                <option value={0}>No</option>
                <option value={1}>Sí</option>
              </select>
            </label>
            <label>
              Calificación: (Entre 0 y 10) 
              <input type="number" value={rating} min="1" max="10" onChange={(e) => setRating(e.target.value)} />
            </label>
            <label>
              Estado:
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="visto">Visto</option>
                <option value="por ver">Por ver</option>
                <option value="abandonado">Abandonado</option>
                <option value="viendo">Viendo</option>
              </select>
            </label>
          </>
        )}

        {type !== 'films' && (
          <>
            <label>
              Temporadas (vistas de {item.temporadas}):
              <input type="number" value={seasonsWatched} min="0" max={item.temporadas} onChange={(e) => setSeasonsWatched(parseInt(e.target.value))} />
            </label>
            <label>
              Capítulos (vistos de {item.capitulos}):
              <input type="number" value={episodesWatched} min="0" max={item.capitulos} onChange={(e) => setEpisodesWatched(parseInt(e.target.value))} />
            </label>
            <label>
              Calificación: (Entre 0 y 10) 
              <input type="number" value={rating} min="1" max="10" onChange={(e) => setRating(parseInt(e.target.value))} />
            </label>
            <label>
              Estado:
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="visto">Visto</option>
                <option value="por ver">Por ver</option>
                <option value="abandonado">Abandonado</option>
                <option value="viendo">Viendo</option>
              </select>
            </label>
          </>
        )}

        <button onClick={handleSave}>Guardar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalAllList;
