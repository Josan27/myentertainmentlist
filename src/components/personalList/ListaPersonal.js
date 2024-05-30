import React, { useState } from 'react';
import './ListaPersonal.css';

const categories = ['Visto', 'Viendo', 'Por ver', 'Abandonado'];

const Section = ({ title, activeCategory, setActiveCategory }) => (
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
          {/* Aquí se insertarán los elementos de la lista personal en el futuro */}
        </div>
      ))}
    </div>
  </div>
);

const ListaPersonal = () => {
  const [activeSection, setActiveSection] = useState('Películas');
  const [activeCategory, setActiveCategory] = useState(null);

  const sections = ['Películas', 'Animes', 'Series'];

  return (
    <div className="personal-list-page">
      <h1>MYENTERTAINMENTLIST</h1>
      <div className="section-select">
        {sections.map(section => (
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
        />
      ) : (
        <Section
          title={activeSection}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}
    </div>
  );
};

export default ListaPersonal;