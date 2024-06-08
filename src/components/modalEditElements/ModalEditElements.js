import React, { useState, useEffect } from 'react';
import './ModalEditElements.css';
import { updateItemInUserList } from '../../api/myentertainmentlistApi';

const ModalEditElements = ({ show, onClose, onSave, item, type, values, userId }) => {
  console.log(item);
  console.log(values);

  const [viewed, setViewed] = useState(false);
  const [rating, setRating] = useState(1);
  const [status, setStatus] = useState("Por ver");
  const [seasonsWatched, setSeasonsWatched] = useState(0);
  const [episodesWatched, setEpisodesWatched] = useState(0);

  useEffect(() => {
    if (values) {
      setViewed(values.viewed || false);
      setRating(values.rating || 0);
      setStatus(values.status || "Por ver");
      setSeasonsWatched(values.seasonsWatched || 0);
      setEpisodesWatched(values.episodesWatched || 0);
    }
  }, [values]);

  const handleSave = async () => {
    // Validar la calificación
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

    // Crear el nuevo objeto para guardar en la lista personal del usuario
    const updatedItem = {
      ...values,
      rating,
      status,
      ...(type === 'films' ? { viewed: viewed ? 1 : 0 } : {}),
      ...(type !== 'films' ? { seasonsWatched, episodesWatched } : {}),
    };

    // Llamar a la API para actualizar el ítem en el backend
    const result = await updateItemInUserList(userId, type, updatedItem);
    if (result.error) {
      console.error(result.data);
      return;
    }

    onSave(updatedItem);
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
              <input type="number" value={rating} min="0" max="10" onChange={(e) => setRating(parseInt(e.target.value))} />
            </label>
            <label>
              Estado:
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Visto">Visto</option>
                <option value="Por ver">Por ver</option>
                <option value="Abandonado">Abandonado</option>
                <option value="Viendo">Viendo</option>
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
              <input type="number" value={rating} min="0" max="10" onChange={(e) => setRating(parseInt(e.target.value))} />
            </label>
            <label>
              Estado:
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Visto">Visto</option>
                <option value="Por ver">Por ver</option>
                <option value="Abandonado">Abandonado</option>
                <option value="Viendo">Viendo</option>
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

export default ModalEditElements;
