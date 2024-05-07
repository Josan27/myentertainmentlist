import './Tvshow.css'

const TvshowNote = ({ tvshowNote }) => {
  
  return (
    
    <div className="portada" key={tvshowNote.id} >
      <img src={tvshowNote.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${tvshowNote.titulo_español}`} />
      <p>{tvshowNote.titulo_español}</p>
    </div>
  );
}

export default TvshowNote;