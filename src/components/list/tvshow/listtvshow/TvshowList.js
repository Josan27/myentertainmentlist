import { useEffect, useState } from 'react';
import { getTvShowFive, getTvshowMore5, getTvShowNext5 } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './TvshowList.css'
import Tvshow from '../cards/Tvshow';


const TvshowList = ({ type }) =>  {

  const {setTvshowNext, setTvshowAll, setTvshowNote} = useAuth();
  const [tvshowData, setTvshowData] = useState([]);

  const fetchData = async () => {
    let tvshowData;
    if (type === 'next') {
      tvshowData = await getTvShowNext5();
      setTvshowNext(tvshowData);
    } else if(type=== 'note'){
      tvshowData = await getTvshowMore5();
      setTvshowNote(tvshowData);
    } else {
      tvshowData = await getTvShowFive();
      setTvshowAll(tvshowData);
    }
    setTvshowData(tvshowData);
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <div className='results'>
      {tvshowData.length === 0 ? 
        <p>No se han encontrado Series</p> :
        tvshowData.map(tvshow =><Tvshow key={tvshow.id} tvshow={tvshow}/>)
      }
    </div>
  );
}

export default TvshowList;