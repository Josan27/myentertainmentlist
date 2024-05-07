import { useEffect } from 'react';
import {getFilmsMore5 } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './FilmsList.css'
import FilmsNote from '../cards/FilmsNote';


function FilmsListNote() {

  const {filmsNote, setFilmsNote} = useAuth();


  const downloadFilms = async () => {
      const filmsNote = await getFilmsMore5();
      setFilmsNote(filmsNote);
  }

  useEffect(() => {
    downloadFilms();
  }, []);

  return (
      <div className='results'>

        {
          filmsNote.length === 0 ? 
            <p>No se han encontrado Peliculas</p>
          :
          filmsNote.map(filmsNote =>
              <FilmsNote filmsNote={filmsNote}/>
            )
        }
      </div>
  );
}

export default FilmsListNote;