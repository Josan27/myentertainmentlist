import './Anime.css'

const Anime = ({ anime }) => {
  
  return (
    
    <div className="portada" key={anime.id} >
      <img src={anime.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${anime.titulo_español}`} />
      <p>{anime.titulo_español}</p>
    </div>
  );
}

export default Anime;