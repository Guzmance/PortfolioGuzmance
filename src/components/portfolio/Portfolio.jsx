import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/TripAdvisor.png';
import IMG2 from '../../assets/pokeapi.png';
import IMG3 from '../../assets/RicknMorty.png';
import IMG4 from '../../assets/ecommerce.jpg';
import IMG5 from '../../assets/foodapp.png';
import IMG6 from '../../assets/Admin Panel.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Travel and Weather Advisor ',
    github: 'https://github.com/Guzmance/project_travel_advisor',
    demo: 'https://github.com/Guzmance/project_travel_advisor',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Poke API',
    github: 'https://github.com/Guzmance/PokeApi',
    demo: 'https://github.com/Guzmance/PokeApi',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Rick and Morty API ',
    github: 'https://github.com/Guzmance/RickandMortyAPI',
    demo: 'https://github.com/Guzmance/RickandMortyAPI',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Ecommerce',
    github: 'https://github.com/Guzmance/next-tailwind-ecommerce',
    demo: 'https://github.com/Guzmance/next-tailwind-ecommerce',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Food App Mobile',
    github: 'https://github.com/Guzmance/FoodAppProject',
    demo: 'https://github.com/Guzmance/FoodAppProject',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Admin Crud Panel',
    github: 'https://github.com/PracticaProfesional-2023/FrontEndAdmin',
    demo: 'https://github.com/PracticaProfesional-2023/FrontEndAdmin',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn btn-primary">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
