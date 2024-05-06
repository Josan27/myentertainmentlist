import { useEffect } from 'react';
import { getAnimeFive } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './AnimeList.css'
import AnimeAll from '../cards/AnimeAll';


function AnimeListAll() {

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
              <AnimeAll animeAll={animeAll}/>
            )
        }
      </div>
  );
}

export default AnimeListAll;