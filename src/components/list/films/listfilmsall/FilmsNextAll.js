import { useEffect } from 'react';
import { getFilmsNext5 } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import FilmsNextAll from '../cardsall/FilmsNextAll';


function FilmsListNextAll() {

  const {filmsNext, setFilmsNext} = useAuth();


  const downloadFilms = async () => {
      const filmsNext = await getFilmsNext5();
      setFilmsNext(filmsNext);
  }

  useEffect(() => {
    downloadFilms();
  }, []);

  return (
      <div className='results'>

        {
          filmsNext.length === 0 ? 
            <p>No se han encontrado Peliculas</p>
          :
          filmsNext.map(filmsNext =>
              <FilmsNextAll filmsNext={filmsNext}/>
            )
        }
      </div>
  );
}

export default FilmsListNextAll;