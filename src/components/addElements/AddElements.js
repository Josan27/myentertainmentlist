import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddElement.css';
import { postFilm, postTvshow, postAnime } from '../../api/myentertainmentlistApi';

const AddElement = () => {
    const { type } = useParams(); // Obtenemos el tipo de elemento (película, serie o anime) de la URL
    const [item, setItem] = useState({
        titulo_original: '',
        titulo_español: '',
        cartelera: '',
        año: '',
        director: '',
        productora: '',
        estado: 'disponible',
        duracion: '',
        temporadas: '',
        capitulos: '',
        calificacion: 0,
        contadorNotas: 0,
        descripcion: ''
    });
    const [message, setMessage] = useState('');

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prevItem) => ({ ...prevItem, [name]: value }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar campos requeridos
        if (!item.titulo_original || !item.titulo_español || !item.cartelera || !item.año || !item.descripcion) {
            setMessage('Por favor, complete todos los campos obligatorios.');
            return;
        }

        if (type === 'pelicula' && !item.director) {
            setMessage('Por favor, complete todos los campos obligatorios.');
            return;
        }

        if ((type === 'serie' || type === 'anime') && (!item.productora)) {
            setMessage('Por favor, complete todos los campos obligatorios.');
            return;
        }

        // Comporbar el tipo para agregarle los datos correspondientes
        let newItem;
        if (type === 'pelicula') {
            newItem = {
                titulo_original: item.titulo_original,
                titulo_español: item.titulo_español,
                cartelera: item.cartelera,
                año: item.año,
                director: item.director,
                estado: item.estado,
                duracion: item.duracion,
                calificacion: item.calificacion,
                contadorNotas: item.contadorNotas,
                descripcion: item.descripcion
            };
        } else if (type === 'serie' || type === 'anime') {
            newItem = {
                titulo_original: item.titulo_original,
                titulo_español: item.titulo_español,
                cartelera: item.cartelera,
                año: item.año,
                productora: item.productora,
                estado: item.estado,
                temporadas: item.temporadas,
                capitulos: item.capitulos,
                calificacion: item.calificacion,
                contadorNotas: item.contadorNotas,
                descripcion: item.descripcion
            };
        }

        // Enviar la solicitud POST al backend según el tipo de elemento
        let response;
        if (type === 'pelicula') {
            response = await postFilm(newItem);
        } else if (type === 'serie') {
            response = await postTvshow(newItem);
        } else if (type === 'anime') {
            response = await postAnime(newItem);
        }

        // Manejar la respuesta de la solicitud
        if (response.error) {
            setMessage(`Error: ${response.data}`);
        } else {
            setMessage('Elemento agregado con éxito');
            setItem({
                // Resetear el formulario
                titulo_original: '',
                titulo_español: '',
                cartelera: '',
                año: '',
                director: '',
                productora: '',
                estado: 'disponible',
                duracion: '',
                temporadas: '',
                capitulos: '',
                calificacion: 0,
                contadorNotas: 0,
                descripcion: ''
            });
        }
    };

    return (
        <form className="add-item-form" onSubmit={handleSubmit}>
            <div>
                <label>Título Original:</label>
                <input
                    type="text"
                    name="titulo_original"
                    value={item.titulo_original}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Título en Español:</label>
                <input
                    type="text"
                    name="titulo_español"
                    value={item.titulo_español}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Cartelera:</label>
                <input
                    type="text"
                    name="cartelera"
                    value={item.cartelera}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Año:</label>
                <input type="number" name="año" value={item.año} onChange={handleChange} />
            </div>
            <div>
                <label>Estado:</label>
                <select name="estado" value={item.estado} onChange={handleChange}>
                    <option value="disponible">Disponible</option>
                    <option value="proximamente">Próximamente</option>
                </select>
            </div>
            {type === 'pelicula' && (
                <>
                <div>
                    <label>Director:</label>
                    <input
                        type="text"
                        name="director"
                        value={item.director}
                        onChange={handleChange}
                        disabled={item.estado === 'proximamente'}
                    />
                </div>
                <div>
                    <label>Duración:</label>
                    <input
                        type="text"
                        name="duracion"
                        value={item.duracion}
                        onChange={handleChange}
                        disabled={item.estado === 'proximamente'}
                    />
                </div>
                </>
            )}
            {(type === 'serie' || type === 'anime') && (
                <>
                    <div>
                        <label>Productora:</label>
                        <input
                            type="text"
                            name="productora"
                            value={item.productora}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Temporadas:</label>
                        <input
                            type="number"
                            name="temporadas"
                            value={item.temporadas}
                            onChange={handleChange}
                            disabled={item.estado === 'proximamente'}
                        />
                    </div>
                    <div>
                        <label>Capítulos:</label>
                        <input
                            type="number"
                            name="capitulos"
                            value={item.capitulos}
                            onChange={handleChange}
                            disabled={item.estado === 'proximamente'}
                        />
                    </div>
                </>
            )}
            <div>
                <label>Descripción:</label>
                <textarea
                    name="descripcion"
                    value={item.descripcion}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button type="submit">Agregar</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default AddElement;
