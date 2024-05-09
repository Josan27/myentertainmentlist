import { useEffect, useState } from 'react';
import { getFilmsFive, getFilmsNext5, getFilmsMore5 } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './FilmsList.css'
import Films from '../cards/Films';


const FilmsList = ({ type }) => {
  const { setFilmsAll, setFilmsNext, setFilmsNote } = useAuth();
  const [filmsData, setFilmsData] = useState([]);

  const fetchData = async () => {
    let filmsData;
    if (type === 'next') {
      filmsData = await getFilmsNext5();
      setFilmsNext(filmsData);
    } else if(type=== 'note'){
      filmsData = await getFilmsMore5();
      setFilmsNote(filmsData);
    } else {
      filmsData = await getFilmsFive();
      setFilmsAll(filmsData);
    }
    setFilmsData(filmsData);
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <div className='results'>
      {filmsData.length === 0 ? 
        <p>No se han encontrado Peliculas</p> :
        filmsData.map(film => <Films key={film.id} film={film} />)
      }
    </div>
  );
}

export default FilmsList;