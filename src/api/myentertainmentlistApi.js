export const getUsers = async () => {
    const response = await fetch("http://localhost:3000/users");
    return await response.json();
}

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

export const getFilmsNext = async () => {
    const response = await fetch("http://localhost:3000/films");
    const data = await response.json();
    const filmsProximos = data.filter(films => films.estado === "proximamente");
    return filmsProximos; 
}

export const getTvShowNext = async () => {
    const response = await fetch("http://localhost:3000/tvshow");
    const data = await response.json();
    const tvshowProximos = data.filter(tvshow => tvshow.estado === "proximamente");
    return tvshowProximos; 
}

export const getAnimeNext = async () => {
    const response = await fetch("http://localhost:3000/anime");
    const data = await response.json();
    const animesProximos = data.filter(anime => anime.estado === "proximamente");
    return animesProximos; 
}

export const getFilmsMore = async () => {
    const response = await fetch("http://localhost:3000/films");
    const data = await response.json();
    const filmsOrdenados = data.sort((a, b) => b.calificacion - a.calificacion);
    return filmsOrdenados; 
}

export const getTvshowMore = async () => {
    const response = await fetch("http://localhost:3000/tvshow");
    const data = await response.json();
    const tvshowOrdenados = data.sort((a, b) => b.calificacion - a.calificacion);
    return tvshowOrdenados; 
}

export const getAnimeMore = async () => {
    const response = await fetch("http://localhost:3000/anime");
    const data = await response.json();
    const animesOrdenados = data.sort((a, b) => b.calificacion - a.calificacion);
    return animesOrdenados; 
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

export const getFilmsNext5 = async () => {
    const response = await fetch("http://localhost:3000/films");
    const data = await response.json();
    const filmsProximos = data.filter(films => films.estado === "proximamente");
    return filmsProximos.slice(0, 5); 
}

export const getTvShowNext5 = async () => {
    const response = await fetch("http://localhost:3000/tvshow");
    const data = await response.json();
    const tvshowProximos = data.filter(tvshow => tvshow.estado === "proximamente");
    return tvshowProximos.slice(0, 5); 
}

export const getAnimeNext5 = async () => {
    const response = await fetch("http://localhost:3000/anime");
    const data = await response.json();
    const animesProximos = data.filter(anime => anime.estado === "proximamente");
    return animesProximos.slice(0, 5); 
}

export const getFilmsMore5 = async () => {
    const response = await fetch("http://localhost:3000/films");
    const data = await response.json();
    const filmsOrdenados = data.sort((a, b) => b.calificacion - a.calificacion);
    return filmsOrdenados.slice(0, 5); 
}

export const getTvshowMore5 = async () => {
    const response = await fetch("http://localhost:3000/tvshow");
    const data = await response.json();
    const tvshowOrdenados = data.sort((a, b) => b.calificacion - a.calificacion);
    return tvshowOrdenados.slice(0, 5); 
}

export const getAnimeMore5 = async () => {
    const response = await fetch("http://localhost:3000/anime");
    const data = await response.json();
    const animesOrdenados = data.sort((a, b) => b.calificacion - a.calificacion);
    return animesOrdenados.slice(0, 5); 
}

export const deleteFilm = async (id) => {
    const response = await fetch(`http://localhost:3000/films/${id}`, {
      method: 'DELETE'
    });
    return response;
  };
  
  export const deleteAnime = async (id) => {
    const response = await fetch(`http://localhost:3000/anime/${id}`, {
      method: 'DELETE'
    });
    return response;
  };
  
  export const deleteTvShow = async (id) => {
    const response = await fetch(`http://localhost:3000/tvshow/${id}`, {
      method: 'DELETE'
    });
    return response;
  };
  
  export const postFilm = async (film) => {
    try {
        const response = await fetch("http://localhost:3000/films", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(film)
        });

        if (response.status === 201) {
            const data = await response.json();
            return { error: false, data };
        }

        return { error: true, data: "No se ha podido guardar la película" };
    } catch (error) {
        return { error: true, data: "Error al procesar la solicitud POST" };
    }
};

export const postTvshow = async (tvshow) => {
    try {
        const response = await fetch("http://localhost:3000/tvshow", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tvshow)
        });

        if (response.status === 201) {
            const data = await response.json();
            return { error: false, data };
        }

        return { error: true, data: "No se ha podido guardar la serie" };
    } catch (error) {
        return { error: true, data: "Error al procesar la solicitud POST" };
    }
};

export const postAnime = async (anime) => {
    try {
        const response = await fetch("http://localhost:3000/anime", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(anime)
        });

        if (response.status === 201) {
            const data = await response.json();
            return { error: false, data };
        }

        return { error: true, data: "No se ha podido guardar el anime" };
    } catch (error) {
        return { error: true, data: "Error al procesar la solicitud POST" };
    }
};

export const getUserById = async (userId) => {
    const response = await fetch(`http://localhost:3000/users/${userId}`);
    return await response.json();
};

export const updateUser = async (userId, updatedUser) => {
    // Excluir la contraseña del usuario actualizado
    // Si no se excluye se envia la contraseña haseaha y se vuelve a hasear
    const { password, ...userWithoutPassword } = updatedUser;
    const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userWithoutPassword) 
    });
    return response;
};

export const addToUserList = async (userId, itemType, newItem) => {
    try {
        const user = await getUserById(userId);
        if (!user) {
            return { error: true, data: "Usuario no encontrado" };
        }
        if (!['films', 'tvshow', 'anime'].includes(itemType)) {
            return { error: true, data: "Tipo de elemento no válido" };
        }
        user.myList[itemType].push(newItem);
        const response = await updateUser(userId, user);
        console.log(response);
        if (response.ok) {
            return { error: false, data: "Elemento agregado a la lista personal del usuario" };
        }
        return { error: true, data: "No se ha podido agregar el elemento a la lista personal del usuario" };
    } catch (error) {
        return { error: true, data: "Error al procesar la solicitud" };
    }
};

export const getUserList = async (userId) => {
    const response = await fetch(`http://localhost:3000/users/${userId}`);
    const user = await response.json();
    return user.myList;
};
