import './Tvshow.css'

const TvshowAll = ({ tvshowAll }) => {
  
  return (
    
    <div className="portada" key={tvshowAll.id} >
      <img src={tvshowAll.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${tvshowAll.titulo_original}`} />
      <p>{tvshowAll.titulo_español}</p>
    </div>
  );
}

export default TvshowAll;