import React, { useState } from 'react';
import '../homelist/HomeList.css'
import List5Home from '../list/alllist/List5Home';
import { Link } from 'react-router-dom';

/*
El componente HomeList muestra las listas de películas, series y anime. 
Permite alternar la visibilidad de las listas 
y proporciona enlaces a más detalles sobre cada tipo de contenido.
*/

const HomeList = () => {
  const [filmsVisible, setfilmsVisible] = useState(false);
  const [tvshowVisible, settvshowVisible] = useState(false);
  const [animeVisible, setanimeVisible] = useState(false);

  // Funciones para alternar la visibilidad de cada sección.
  const togglefilmsVisibility = () => { 
    setfilmsVisible(!filmsVisible);
  };
  const toggletvshowVisibility = () => {
    settvshowVisible(!tvshowVisible);
  };
  const toggleanimeVisibility = () => {
    setanimeVisible(!animeVisible);
  };

  return (
    <div className="principal">
      <div className="films">
        <h2 onClick={togglefilmsVisibility}>{filmsVisible} Peliculas</h2>
        {filmsVisible &&(
          <div className="contentFilms">   
            <div className='allContent'><Link to={`/filmslistall/somefilms`} className='link'><p className='pahover'>Algunos de ellos:</p></Link><List5Home type="somefilms"></List5Home></div>
            <div className='popularContent'><Link to={`/filmsnoteall/notefilms`} className='link'><p className='pahover'>Mejores calificados:</p></Link><List5Home type="notefilms"></List5Home></div>
            <div className='nextContent'><Link to={`/filmsnextall/nextfilms`} className='link'><p className='pahover'>Proximamente:</p></Link><List5Home type="nextfilms"></List5Home></div>
          </div>
        )}
      </div>
      <div className="tvshow">
        <h2 onClick={toggletvshowVisibility}>{tvshowVisible} Series</h2>
        {tvshowVisible &&(
          <div className="contentTvshow">
            <div className='allContent'><Link to={`/tvshowlistall/sometvshow`} className='link'><p className='pahover'>Algunos de ellos:</p></Link><List5Home type="sometvshow"></List5Home></div>
            <div className='popularContent'><Link to={`/tvshownoteall/notetvshow`} className='link'><p className='pahover'>Mejores calificados:</p></Link><List5Home type="notetvshow"></List5Home></div>
            <div className='nextContent'><Link to={`/tvshownextall/nexttvshow`} className='link'><p className='pahover'>Proximamente:</p></Link><List5Home type="nexttvshow"></List5Home></div>
          </div>
        )}
      </div>
      <div className="anime">
        <h2 onClick={toggleanimeVisibility}>{animeVisible} Anime</h2>
        {animeVisible &&(
          <div className="contentAnime">
            <div className='allContent'><Link to={`/animelistall/someanime`} className='link'><p className='pahover'>Algunos de ellos:</p></Link><List5Home type="someanime"></List5Home></div>
            <div className='popularContent'><Link to={`/animenoteall/noteanime`} className='link'><p className='pahover'>Mejores calificados:</p></Link><List5Home type="noteanime"></List5Home></div>
            <div className='nextContent'><Link to={`/animenextall/nextanime`} className='link'><p className='pahover'>Proximamente:</p></Link><List5Home type="nextanime"></List5Home></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeList;