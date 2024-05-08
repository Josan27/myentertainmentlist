import { useEffect } from 'react';
import { getAnimeFive } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './AnimeList.css'
import Anime from '../cards/Anime';


function AnimeList() {

  const {animeAll, setAnimeAll} = useAuth();


  const downloadAnime = async () => {
      const animeAll = await getAnimeFive();
      setAnimeAll(animeAll);
  }

  useEffect(() => {
    downloadAnime();
  }, []);

  return (
      <div className='results'>

        {
          animeAll.length === 0 ? 
            <p>No se han encontrado Animes</p>
          :
          animeAll.map(animeAll =>
              <Anime animeAll={animeAll}/>
            )
        }
      </div>
  );
}

export default AnimeList;