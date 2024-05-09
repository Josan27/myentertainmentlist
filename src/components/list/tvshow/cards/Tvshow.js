import './Tvshow.css'

const Tvshow = ({ tvshow }) => {
  
  return (
    
    <div className="portada" key={tvshow.id} >
      <img src={tvshow.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${tvshow.titulo_original}`} />
      <p>{tvshow.titulo_español}</p>
    </div>
  );
}

export default Tvshow;