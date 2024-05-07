import './Films.css'

const FilmsNext = ({ filmsNext }) => {
  
  return (
    
    <div className="portada" key={filmsNext.id} >
      <img src={filmsNext.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${filmsNext.titulo_español}`} />
      <p>{filmsNext.titulo_español}</p>
    </div>
  );
}

export default FilmsNext;