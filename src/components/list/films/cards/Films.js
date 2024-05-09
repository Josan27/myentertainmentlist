import './Films.css'

const Films = ({ film }) => {
  
  return (
    <div className="portada" key={film.id}>
      <img src={film.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${film.titulo_español}`} />
      <p>{film.titulo_español}</p>
    </div>
  );
}

export default Films;