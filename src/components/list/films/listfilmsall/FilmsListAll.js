import { useEffect } from 'react';
import { getFilms } from '../../../../api/myentertainmentlistApi';
import { useAuth } from '../../../contexto/AuthProvider';
import FilmsAll from '../cardsall/FilmsAll';


function FilmsListAll() {

  const {filmsAll, setFilmsAll} = useAuth();

  const downloadFilms = async () => {
    const filmsData = await getFilms(); 
    setFilmsAll(filmsData); 
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
            filmsAll.map(film => ( 
            <FilmsAll key={film.id} filmsAll={film}/> 
            ))
        }
      </div>
  );
}

export default FilmsListAll;