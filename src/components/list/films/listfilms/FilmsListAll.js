import { useEffect } from 'react';
import { getFilmsFive } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './FilmsList.css'
import FilmsAll from '../cards/FilmsAll';


function FilmsListAll() {

  const {filmsAll, setFilmsAll} = useAuth();


  const downloadFilms = async () => {
      const filmsAll = await getFilmsFive();
      setFilmsAll(filmsAll);
  }

  useEffect(() => {
    downloadFilms();
  }, []);

  return (
      <div className='results'>

        {
          filmsAll.length === 0 ? 
            <p>No se han encontrado Peliculas</p>
          :
          filmsAll.map(filmsAll =>
              <FilmsAll filmsAll={filmsAll}/>
            )
        }
      </div>
  );
}

export default FilmsListAll;