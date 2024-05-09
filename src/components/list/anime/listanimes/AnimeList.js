import { useEffect, useState } from 'react';
import { getAnimeFive, getAnimeMore5, getAnimeNext5 } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './AnimeList.css'
import Anime from '../cards/Anime';


const AnimeList = ({ type }) => {

  const {setAnimeNext, setAnimeAll, setAnimeNote} = useAuth();
  const [animeData, setAnimeData] = useState([]);

  const fetchData = async () => {
    let animeData;
    if (type === 'next') {
      animeData = await getAnimeNext5();
      setAnimeNext(animeData);
    } else if(type=== 'note'){
      animeData = await getAnimeMore5();
      setAnimeNote(animeData);
    } else {
      animeData = await getAnimeFive();
      setAnimeAll(animeData);
    }
    setAnimeData(animeData);
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <div className='results'>
      {animeData.length === 0 ? 
        <p>No se han encontrado Animes</p> :
        animeData.map(anime => <Anime key={anime.id} anime={anime}/>)
      }
    </div>
  );
}

export default AnimeList;