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
    if (response.ok) {
        await updateUserLists(id, 'films');
    }
    return response;
  };
  
  export const deleteAnime = async (id) => {
    const response = await fetch(`http://localhost:3000/anime/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
        await updateUserLists(id, 'anime');
    }
    return response;
  };
  
  export const deleteTvShow = async (id) => {
    const response = await fetch(`http://localhost:3000/tvshow/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
        await updateUserLists(id, 'tvshow');
    }
    return response;
  };

  const updateUserLists = async (itemId, itemType) => {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    const updatedUsers = users.map(user => {
        user.myList[itemType] = user.myList[itemType].filter(item => item.id !== itemId);

        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    });

    await Promise.all(updatedUsers.map(user =>
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    ));
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

        if (response.ok) {
            const users = await getAllUsers();
            const averageRating = calculateAverageRating(newItem.id, itemType, users);
            await updateItemRating(itemType, newItem.id, averageRating);
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

export const deleteItemFromUserList = async (userId, itemType, itemId) => {
    try {
      const userAll = await getUserById(userId);
      const { password, ...user } = userAll;
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      if (!['films', 'tvshow', 'anime'].includes(itemType)) {
        throw new Error('Tipo de elemento no válido');
      }
  
      user.myList[itemType] = user.myList[itemType].filter(item => item.id !== itemId);
  
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar la lista del usuario');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al eliminar el elemento de la lista del usuario:', error.message);
      throw error;
    }
  };

  export const updateItemInUserList = async (userId, itemType, updatedItem) => {
    try {
        const user = await getUserById(userId);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        if (!['films', 'tvshow', 'anime'].includes(itemType)) {
            throw new Error("Tipo de elemento no válido");
        }

        const itemIndex = user.myList[itemType].findIndex(item => item.id === updatedItem.id);
        if (itemIndex === -1) {
            throw new Error("Elemento no encontrado en la lista del usuario");
        }

        user.myList[itemType][itemIndex] = updatedItem;
        const response = await updateUser(userId, user);

        if (response.ok) {
            const users = await getAllUsers();
            const averageRating = calculateAverageRating(updatedItem.id, itemType, users);
            await updateItemRating(itemType, updatedItem.id, averageRating);
            return { error: false, data: "Elemento actualizado en la lista personal del usuario" };
        }
        throw new Error("Error al actualizar la lista del usuario");
    } catch (error) {
        return { error: true, data: error.message };
    }
};

const calculateAverageRating = (itemId, itemType, users) => {
    let totalRating = 0;
    let ratingCount = 0;

    users.forEach(user => {
        user.myList[itemType].forEach(item => {
            if (item.id === itemId && item.rating > 0) {
                totalRating += item.rating;
                ratingCount++;
            }
        });
    });

    return ratingCount > 0 ? totalRating / ratingCount : 0;
};

const getAllUsers = async () => {
    const response = await fetch('http://localhost:3000/users');
    return await response.json();
};

const updateItemRating = async (itemType, itemId, newRating) => {
    const response = await fetch(`http://localhost:3000/${itemType}/${itemId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ calificacion: newRating })
    });
    return response;
};
