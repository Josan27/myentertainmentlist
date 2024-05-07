import './Tvshow.css'

const TvshowNext = ({ tvshowNext }) => {
  
  return (
    
    <div className="portada" key={tvshowNext.id} >
      <img src={tvshowNext.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${tvshowNext.titulo_español}`} />
      <p>{tvshowNext.titulo_español}</p>
    </div>
  );
}

export default TvshowNext;