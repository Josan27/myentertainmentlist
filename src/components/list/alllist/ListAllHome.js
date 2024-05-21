import { useEffect, useState } from 'react';
import { 
  getFilms, getFilmsNext, getFilmsMore, 
  getAnime, getAnimeMore, getAnimeNext,
  getTvshow, getTvshowMore, getTvShowNext,
  deleteFilm, deleteAnime, deleteTvShow 
} from '../../../api/myentertainmentlistApi';
import { useAuth } from '../../contexto/AuthProvider';
import CardListAllHome from '../card/CardListAllHome';
import { useParams } from 'react-router-dom';
import './ListAllHome.css'

const ListAllHome = () => {
  const { type } = useParams();
  const { setFilmsAll, setFilmsNext, setFilmsNote, setAnimeNext, setAnimeAll, setAnimeNote, setTvshowNext, setTvshowAll, setTvshowNote } = useAuth();
  const [listData, setListData] = useState([]);
  const [query, setQuery] = useState('');

  // Recupera los datos de la API basándose en el tipo especificado
  const fetchData = async () => {
    let listData = [];
    if (type === 'nextfilms') {
      listData = await getFilmsNext();
      setFilmsNext(listData);
    }
    if (type === 'notefilms') {
      listData = await getFilmsMore();
      setFilmsNote(listData);
    }
    if (type === 'somefilms') {
      listData = await getFilms();
      setFilmsAll(listData);
    }
    if (type === 'nexttvshow') {
      listData = await getTvShowNext();
      setTvshowNext(listData);
    }
    if (type === 'notetvshow') {
      listData = await getTvshowMore();
      setTvshowNote(listData);
    }
    if (type === 'sometvshow') {
      listData = await getTvshow();
      setTvshowAll(listData);
    }
    if (type === 'nextanime') {
      listData = await getAnimeNext();
      setAnimeNext(listData);
    }
    if (type === 'noteanime') {
      listData = await getAnimeMore();
      setAnimeNote(listData);
    }
    if (type === 'someanime') {
      listData = await getAnime();
      setAnimeAll(listData);
    }

    // Filtra los datos según la consulta de búsqueda
    if (query) {
      listData = listData.filter(item => 
        item.titulo_original.toLowerCase().includes(query.toLowerCase()) ||
        item.titulo_español.toLowerCase().includes(query.toLowerCase())
      );
    }
    setListData(listData);
  };

  // Llama a fetchData cuando el tipo o el término de búsqueda cambian
  useEffect(() => {
    fetchData();
  }, [type, query]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDelete = async (id, type) => {
    let response;
    if (type.includes('films')) {
      response = await deleteFilm(id);
    } else if (type.includes('tvshow')) {
      response = await deleteTvShow(id);
    } else if (type.includes('anime')) {
      response = await deleteAnime(id);
    }

    if (response.ok) {
      fetchData();
    } else {
      console.error("Error al borrar elemento");
    }
  };

  return (
    <div className='container'>
      <input type="text" className="buscador" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por título..."/>
      {listData.length === 0 ? 
        <p>No se han encontrado elementos</p> :
        listData.map(list => <CardListAllHome key={list.id} list={list} type={type} onDelete={handleDelete} />)
      }
    </div>
  );
}

export default ListAllHome;