import { useEffect } from 'react';
import { getTvShowFive } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './TvshowList.css'
import TvshowAll from '../cards/TvshowAll';


function TvshowListAll() {

  const {tvshowAll, setTvshowAll} = useAuth();


  const downloadTvshow = async () => {
      const tvshowAll = await getTvShowFive();
      setTvshowAll(tvshowAll);
  }

  useEffect(() => {
    downloadTvshow();
  }, []);

  return (
      <div className='results'>

        {
          tvshowAll.length === 0 ? 
            <p>No se han encontrado Series</p>
          :
          tvshowAll.map(tvshowAll =>
              <TvshowAll tvshowAll={tvshowAll}/>
            )
        }
      </div>
  );
}

export default TvshowListAll;