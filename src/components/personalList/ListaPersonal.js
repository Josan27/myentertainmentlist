import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ListaPersonal.css';
import { getUserById, getUserList } from '../../api/myentertainmentlistApi';

const categories = ['Visto', 'Viendo', 'Por ver', 'Abandonado'];

const Section = ({ title, activeCategory, setActiveCategory, items }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="categories">
      {categories.map(category => (
        <div
          key={category}
          className={`category ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          <h3>{category}</h3>
        </div>
      ))}
    </div>
    <div className="item-list">
      {items.map(item => (
        <div key={item.id} className="item">
          <img src={item.cartelera} alt={item.titulo_original} className="item-img" />
          <div className="item-info">
            <p><strong>Título:</strong> {item.titulo_original}</p>
            <p><strong>Calificación:</strong> {item.rating}</p>
            {item.viewed !== undefined && (
              <p><strong>Vista:</strong> {item.viewed ? 'Sí' : 'No'}</p>
            )}
            {item.seasonsWatched !== undefined && (
              <p><strong>Temporadas vistas:</strong> {item.seasonsWatched}</p>
            )}
            {item.episodesWatched !== undefined && (
              <p><strong>Episodios vistos:</strong> {item.episodesWatched}</p>
            )}
          </div>
          <button className="item-button">Editar</button>
          <button className="item-button">Borrar</button>
        </div>
      ))}
    </div>
  </div>
);

const ListaPersonal = () => {
  const { userId } = useParams();
  const [userName, setUserName] = useState('');
  const [activeSection, setActiveSection] = useState('Películas');
  const [activeCategory, setActiveCategory] = useState(null);
  const [userList, setUserList] = useState({ films: [], tvshow: [], anime: [] });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserById(userId);
      setUserName(user.username); 
    };
    fetchUser();
  }, [userId]);

  useEffect(() => {
    const fetchUserList = async () => {
      const list = await getUserList(userId);
      setUserList(list);
    };
    fetchUserList();
  }, [userId]);

  const getItemsBySectionAndCategory = () => {
    let items = [];
    switch (activeSection) {
      case 'Películas':
        items = userList.films;
        break;
      case 'Animes':
        items = userList.anime;
        break;
      case 'Series':
        items = userList.tvshow;
        break;
      default:
        break;
    }
    return items.filter(item => item.status === activeCategory);
  };

  const itemsToShow = activeCategory ? getItemsBySectionAndCategory() : [];

  return (
    <div className="personal-list-page">
      <h1>MYENTERTAINMENTLIST</h1>
      <h2>Lista de {userName}</h2>
      <div className="section-select">
        {['Películas', 'Animes', 'Series'].map(section => (
          <button
            key={section}
            className={`section-button ${activeSection === section ? 'active' : ''}`}
            onClick={() => {
              setActiveSection(section);
              setActiveCategory(null);
            }}
          >
            {section}
          </button>
        ))}
      </div>
      {activeCategory ? (
        <Section
          title={`${activeSection} - ${activeCategory}`}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          items={itemsToShow}
        />
      ) : (
        <Section
          title={activeSection}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          items={[]}
        />
      )}
    </div>
  );
};

export default ListaPersonal;
