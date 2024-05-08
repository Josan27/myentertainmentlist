import { useEffect } from 'react';
import { getFilms } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import FilmsAll from '../cardsall/FilmsAll';


function FilmsListAll() {

  const {filmsAll, setFilmsAll} = useAuth();


  const downloadFilms = async () => {
      const filmsAll = await getFilms();
      setFilmsAll(filmsAll);
  }

  useEffect(() => {
    downloadFilms();
  }, []);

  return (
      <div>

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