import './Films.css'

const FilmsNote = ({ filmsNote }) => {
  
  return (
    
    <div className="portada" key={filmsNote.id} >
      <img src={filmsNote.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${filmsNote.titulo_español}`} />
      <p>{filmsNote.titulo_español}</p>
    </div>
  );
}

export default FilmsNote;