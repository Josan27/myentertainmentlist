import { useEffect } from 'react';
import {getTvshowMore5 } from '../../../../api/myentertainmentlistApi';
import {useAuth } from '../../../contexto/AuthProvider';
import './TvshowList.css'
import TvshowNote from '../cards/TvshowNote';


function TvshowListNote() {

  const {tvshowNote, setTvshowNote} = useAuth();


  const downloadTvshow = async () => {
      const tvshowNote = await getTvshowMore5();
      setTvshowNote(tvshowNote);
  }

  useEffect(() => {
    downloadTvshow();
  }, []);

  return (
      <div className='results'>

        {
          tvshowNote.length === 0 ? 
            <p>No se han encontrado Series</p>
          :
          tvshowNote.map(tvshowNote =>
              <TvshowNote tvshowNote={tvshowNote}/>
            )
        }
      </div>
  );
}

export default TvshowListNote;