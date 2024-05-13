import { useEffect, useState } from 'react';
import { 
  getFilms, getFilmsNext, getFilmsMore, 
  getAnime, getAnimeMore, getAnimeNext,
  getTvshow, getTvshowMore, getTvShowNext 
} from '../../../api/myentertainmentlistApi';
import {useAuth } from '../../contexto/AuthProvider';
import CardListAllHome from '../card/CardListAllHome';
import { useParams } from 'react-router-dom';


const ListAllHome = () => {
    const { type } = useParams();
  const { setFilmsAll, setFilmsNext, setFilmsNote, setAnimeNext, setAnimeAll, setAnimeNote, setTvshowNext, setTvshowAll, setTvshowNote} = useAuth();
  const [listData, setListData] = useState([]);

  const fetchData = async () => {
    let listData = [];
    if (type === 'nextfilms') {
      listData = await getFilmsNext();
      setFilmsNext(listData);
    }
    if(type=== 'notefilms'){
      listData = await getFilmsMore();
      setFilmsNote(listData);
    } 
    if(type === 'somefilms'){
      listData = await getFilms();
      setFilmsAll(listData);
    }
    if (type === 'nexttvshow') {
      listData = await getTvShowNext();
      setTvshowNext(listData);
    } 
    if(type=== 'notetvshow'){
      listData = await getTvshowMore();
      setTvshowNote(listData);
    } 
    if(type=== 'sometvshow') {
      listData = await getTvshow();
      setTvshowAll(listData);
    }
    if (type === 'nextanime') {
      listData = await getAnimeNext();
      setAnimeNext(listData);
    } 
    if(type=== 'noteanime'){
      listData = await getAnimeMore();
      setAnimeNote(listData);
    } 
    if(type=== 'someanime') {
      listData = await getAnime();
      setAnimeAll(listData);
    }
    setListData(listData);
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <div>
      {listData.length === 0 ? 
        <p>No se han encontrado Elementos</p> :
        listData.map(list => <CardListAllHome key={list.id} list={list} />)
      }
    </div>
  );
}

export default ListAllHome;