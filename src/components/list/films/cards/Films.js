import './Films.css'

const Films = ({ filmsAll }) => {
  
  return (
    
    <div className="portada" key={filmsAll.id} >
      <img src={filmsAll.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${filmsAll.titulo_español}`} />
      <p>{filmsAll.titulo_español}</p>
    </div>
  );
}

export default Films;