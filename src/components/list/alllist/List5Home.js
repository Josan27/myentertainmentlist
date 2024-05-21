import { useEffect, useState } from 'react';
import { 
  getFilmsFive, getFilmsNext5, getFilmsMore5, 
  getAnimeFive, getAnimeMore5, getAnimeNext5,
  getTvShowFive, getTvshowMore5, getTvShowNext5 
} from '../../../api/myentertainmentlistApi';
import {useAuth } from '../../contexto/AuthProvider';
import './List5Home.css'
import CardList5Home from '../card/CardList5Home';


const List5Home = ({ type }) => {
  const { setFilmsAll, setFilmsNext, setFilmsNote, setAnimeNext, setAnimeAll, setAnimeNote, setTvshowNext, setTvshowAll, setTvshowNote} = useAuth();
  const [listData, setListData] = useState([]);

  // Recupera los datos de la API basándose en el tipo especificado
  const fetchData = async () => {
    let listData;
    if (type === 'nextfilms') {
      listData = await getFilmsNext5();
      setFilmsNext(listData);
    }
    if(type=== 'notefilms'){
      listData = await getFilmsMore5();
      setFilmsNote(listData);
    } 
    if(type === 'somefilms'){
      listData = await getFilmsFive();
      setFilmsAll(listData);
    }
    if (type === 'nexttvshow') {
      listData = await getTvShowNext5();
      setTvshowNext(listData);
    } 
    if(type=== 'notetvshow'){
      listData = await getTvshowMore5();
      setTvshowNote(listData);
    } 
    if(type=== 'sometvshow') {
      listData = await getTvShowFive();
      setTvshowAll(listData);
    }
    if (type === 'nextanime') {
      listData = await getAnimeNext5();
      setAnimeNext(listData);
    } 
    if(type=== 'noteanime'){
      listData = await getAnimeMore5();
      setAnimeNote(listData);
    } 
    if(type=== 'someanime') {
      listData = await getAnimeFive();
      setAnimeAll(listData);
    }
    setListData(listData);
  };

  // Llama a fetchData cuando el tipo cambia
  useEffect(() => {
    fetchData();
  }, [type]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='results'>
      {listData.length === 0 ? 
        <p>No se han encontrado Elementos</p> :
        listData.map(list => <CardList5Home key={list.id} list={list} />)
      }
    </div>
  );
}

export default List5Home;