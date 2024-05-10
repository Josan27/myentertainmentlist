import './CardList5Home.css'

const CardList5Home = ({ list }) => {
  
  return (
    <div className="portada" key={list.id}>
      <img src={list.cartelera} className='imagen' height="200" width="400" alt={`Portada de ${list.titulo_español}`} />
      <p>{list.titulo_español}</p>
    </div>
  );
}

export default CardList5Home;