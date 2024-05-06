
export const getFilms = async () => {
    const response = await fetch("http://localhost:3000/films");
    return await response.json();
}

export const getTvshow = async () => {
    const response = await fetch("http://localhost:3000/tvshow");
    return await response.json();
}

export const getAnime = async () => {
    const response = await fetch("http://localhost:3000/anime");
    return await response.json();
}

export const getFilmOne = async (filmId) => {
    const response = await fetch(`http://localhost:3000/films/${filmId}`);
    return await response.json();
}

export const getTvshowOne = async (tvshowId) => {
    const response = await fetch(`http://localhost:3000/tvshow/${tvshowId}`);
    return await response.json();
}

export const getAnimeOne = async (animeId) => {
    const response = await fetch(`http://localhost:3000/anime/${animeId}`);
    return await response.json();
}

export const getFilmsFive = async () => {
    const response = await fetch("http://localhost:3000/films");
    const filmsData = await response.json();
    return filmsData.slice(0, 5);
}

export const getTvShowFive = async () => {
    const response = await fetch("http://localhost:3000/tvshow");
    const tvshowData = await response.json();
    return tvshowData.slice(0, 5);
}

export const getAnimeFive = async () => {
    const response = await fetch("http://localhost:3000/anime");
    const animeData = await response.json();
    return animeData.slice(0, 5);
}

export const getFilmsNext = async () => {
    const response = await fetch("http://localhost:3000/films");
    const data = await response.json();
    const filmsProximos = data.filter(films => films.estado === "proximamente");
    return filmsProximos.slice(0, 5); 
}

export const getTvShowNext = async () => {
    const response = await fetch("http://localhost:3000/tvshow");
    const data = await response.json();
    const tvshowProximos = data.filter(tvshow => tvshow.estado === "proximamente");
    return tvshowProximos.slice(0, 5); 
}

export const getAnimeNext = async () => {
    const response = await fetch("http://localhost:3000/anime");
    const data = await response.json();
    const animesProximos = data.filter(anime => anime.estado === "proximamente");
    return animesProximos.slice(0, 5); 
}

export const getFilmsMore = async () => {
    const response = await fetch("http://localhost:3000/films");
    const data = await response.json();
    const filmsOrdenados = data.sort((a, b) => b.calificacion - a.calificacion);
    return filmsOrdenados.slice(0, 5); 
}

export const getTvshowMore = async () => {
    const response = await fetch("http://localhost:3000/tvshow");
    const data = await response.json();
    const tvshowOrdenados = data.sort((a, b) => b.calificacion - a.calificacion);
    return tvshowOrdenados.slice(0, 5); 
}

export const getAnimeMore = async () => {
    const response = await fetch("http://localhost:3000/anime");
    const data = await response.json();
    const animesOrdenados = data.sort((a, b) => b.calificacion - a.calificacion);
    return animesOrdenados.slice(0, 5); 
}

  
/*
  export const postFilm = async (film) => {
    try {
        const response = await fetch("http://localhost:3000/films", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(film)
        });

        if (response.status === 201) {
            const data = await response.json();
            return { error: false, data };
        }

        return { error: true, data: "No se ha podido guardar la pelicula" };
    } catch (error) {
        return { error: true, data: "Error al procesar la solicitud POST" };
    }
}


export const deleteFilm = async (film) => {
    const response = await fetch("http://localhost:3000/myentertainmentlist/" + film.id, {
        method: "DELETE"
    });
    
    if (response.status === 200) {
        return {error: false}
    } else {
        return {error: true, data: "No se ha podido borrar la pelicula"};
    }
}
*/