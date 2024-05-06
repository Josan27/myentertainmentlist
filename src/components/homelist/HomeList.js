import React, { useState } from 'react';
import '../homelist/HomeList.css'
import AnimeListAll from '../list/anime/listanimes/AnimeListAll';
import AnimeListNote from '../list/anime/listanimes/AnimeListNote';
import AnimeListNext from '../list/anime/listanimes/AnimeListNext';

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
            <div className='allContent'><p>Algunos de ellos:</p></div>
            <div className='popularContent'><p>Mejores calificados:</p></div>
            <div className='nextContent'><p>Proximamente:</p></div>
          </div>
        )}
      </div>
      <div className="tvshow">
        <h2 onClick={toggletvshowVisibility}>{tvshowVisible} Series</h2>
        {tvshowVisible &&(
          <div className="contentTvshow">
            <div className='allContent'><p>Algunos de ellos:</p></div>
            <div className='popularContent'><p>Mejores calificados:</p></div>
            <div className='nextContent'><p>Proximamente:</p></div>
          </div>
        )}
      </div>
      <div className="anime">
        <h2 onClick={toggleanimeVisibility}>{animeVisible} Anime</h2>
        {animeVisible &&(
          <div className="contentAnime">
            <div className='allContent'><p>Algunos de ellos:</p><AnimeListAll></AnimeListAll></div>
            <div className='popularContent'><p>Mejores calificados:</p><AnimeListNote></AnimeListNote></div>
            <div className='nextContent'><p>Proximamente:</p><AnimeListNext></AnimeListNext></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeList;