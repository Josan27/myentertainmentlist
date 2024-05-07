import { useEffect } from 'react';
import { getTvShowNext5 } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './TvshowList.css'
import TvshowNext from '../cards/TvshowNext';


function TvshowListNext() {

  const {tvshowNext, setTvshowNext} = useAuth();


  const downloadTvshow = async () => {
      const tvshowNext = await getTvShowNext5();
      setTvshowNext(tvshowNext);
  }

  useEffect(() => {
    downloadTvshow();
  }, []);

  return (
      <div className='results'>

        {
          tvshowNext.length === 0 ? 
            <p>No se han encontrado Series</p>
          :
          tvshowNext.map(tvshowNext =>
              <TvshowNext tvshowNext={tvshowNext}/>
            )
        }
      </div>
  );
}

export default TvshowListNext;