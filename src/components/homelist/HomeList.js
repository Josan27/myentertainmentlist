import React, { useState } from 'react';
import '../homelist/HomeList.css'
import AnimeList from '../list/anime/listanimes/AnimeList';
import FilmsList from '../list/films/listfilms/FilmsList';
import TvshowList from '../list/tvshow/listtvshow/TvshowList';
import { Link } from 'react-router-dom';


const HomeList = () => {
  const [filmsVisible, setfilmsVisible] = useState(false);
  const [tvshowVisible, settvshowVisible] = useState(false);
  const [animeVisible, setanimeVisible] = useState(false);

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
            <div className='allContent'><Link to="/filmslistall" className='link'><p className='pahover'>Algunos de ellos:</p></Link><FilmsList></FilmsList></div>
            <div className='popularContent'><Link to="/filmsnoteall" className='link'><p className='pahover'>Mejores calificados:</p></Link><FilmsList type="note"></FilmsList></div>
            <div className='nextContent'><Link to="/filmsnextall" className='link'><p className='pahover'>Proximamente:</p></Link><FilmsList type="next"></FilmsList></div>
          </div>
        )}
      </div>
      <div className="tvshow">
        <h2 onClick={toggletvshowVisibility}>{tvshowVisible} Series</h2>
        {tvshowVisible &&(
          <div className="contentTvshow">
            <div className='allContent'><Link to="/tvshowlistall" className='link'><p className='pahover'>Algunos de ellos:</p></Link><TvshowList></TvshowList></div>
            <div className='popularContent'><Link to="/tvshownoteall" className='link'><p className='pahover'>Mejores calificados:</p></Link><TvshowList type="note"></TvshowList></div>
            <div className='nextContent'><Link to="/tvshownextall" className='link'><p className='pahover'>Proximamente:</p></Link><TvshowList type="next"></TvshowList></div>
          </div>
        )}
      </div>
      <div className="anime">
        <h2 onClick={toggleanimeVisibility}>{animeVisible} Anime</h2>
        {animeVisible &&(
          <div className="contentAnime">
            <div className='allContent'><Link to="/animelistall" className='link'><p className='pahover'>Algunos de ellos:</p></Link><AnimeList></AnimeList></div>
            <div className='popularContent'><Link to="/animenoteall" className='link'><p className='pahover'>Mejores calificados:</p></Link><AnimeList type="note"></AnimeList></div>
            <div className='nextContent'><Link to="/animenextall" className='link'><p className='pahover'>Proximamente:</p></Link><AnimeList type="next"></AnimeList></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeList;