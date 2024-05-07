import { useEffect } from 'react';
import { getAnimeNext5 } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './AnimeList.css'
import AnimeNext from '../cards/AnimeNext';


function AnimeListNext() {

  const {animeNext, setAnimeNext} = useAuth();


  const downloadAnime = async () => {
      const animeNext = await getAnimeNext5();
      setAnimeNext(animeNext);
  }

  useEffect(() => {
    downloadAnime();
  }, []);

  return (
      <div className='results'>

        {
          animeNext.length === 0 ? 
            <p>No se han encontrado Animes</p>
          :
          animeNext.map(animeNext =>
              <AnimeNext animeNext={animeNext}/>
            )
        }
      </div>
  );
}

export default AnimeListNext;