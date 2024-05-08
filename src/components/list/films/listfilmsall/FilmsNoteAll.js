import { useEffect } from 'react';
import {getFilmsMore5 } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import FilmsNoteAll from '../cardsall/FilmsNoteAll';


function FilmsListNoteAll() {

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
              <FilmsNoteAll filmsNote={filmsNote}/>
            )
        }
      </div>
  );
}

export default FilmsListNoteAll;