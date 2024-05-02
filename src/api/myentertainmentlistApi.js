
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