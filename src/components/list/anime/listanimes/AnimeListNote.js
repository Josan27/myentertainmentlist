import { useEffect } from 'react';
import {getAnimeMore } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './AnimeList.css'
import AnimeNote from '../cards/AnimeNote';


function AnimeListNote() {

  const {animeNote, setAnimeNote} = useAuth();


  const downloadAnime = async () => {
      const animeNote = await getAnimeMore();
      setAnimeNote(animeNote);
  }

  useEffect(() => {
    downloadAnime();
  }, []);

  return (
      <div className='results'>

        {
          animeNote.length === 0 ? 
            <p>No se han encontrado Animes</p>
          :
          animeNote.map(animeNote =>
              <AnimeNote animeNote={animeNote}/>
            )
        }
      </div>
  );
}

export default AnimeListNote;