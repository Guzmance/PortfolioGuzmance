import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/TripAdvisor.png";
import IMG2 from "../../assets/pokeapi.png";
import IMG3 from "../../assets/RicknMorty.png";
import IMG4 from "../../assets/ecommerce.jpg";
import IMG5 from "../../assets/foodapp.png";
import IMG6 from "../../assets/Admin Panel.png";
import IMG7 from "../../assets/spotify.gif";
import IMG8 from "../../assets/netflixclone.png";
import IMG9 from "../../assets/tufacturacionweb.png";
import IMG10 from "../../assets/metrics.png";
import IMG11 from "../../assets/tufacturacionapp.png";

import { useMediaQuery } from "react-responsive";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 9,
    image: IMG9,
    title: "TuFacturacion Website",
    demo: "https://tufacturacion.app/",
  },
  {
    id: 1,
    image: IMG1,
    title: "Travel and Weather Advisor ",
    github: "https://github.com/Guzmance/project_travel_advisor",
    demo: "https://github.com/Guzmance/project_travel_advisor",
  },
  {
    id: 2,
    image: IMG4,
    title: "Ecommerce",
    github: "https://github.com/Guzmance/next-tailwind-ecommerce",
    demo: "https://github.com/Guzmance/next-tailwind-ecommerce",
  },
  {
    id: 3,
    image: IMG5,
    title: "Food App Mobile",
    github: "https://github.com/Guzmance/FoodAppProject",
    demo: "https://github.com/Guzmance/FoodAppProject",
  },
  {
    id: 4,
    image: IMG6,
    title: "Admin Crud Panel",
    github: "https://github.com/PracticaProfesional-2023/FrontEndAdmin",
    demo: "https://github.com/PracticaProfesional-2023/FrontEndAdmin",
  },
  {
    id: 5,
    image: IMG7,
    title: "Spotify Clone",
    github: "https://github.com/fdgbatarse1/Spotify",
    demo: "https://github.com/fdgbatarse1/Spotify",
  },
  {
    id: 6,
    image: IMG8,
    title: "Netflix Clone",
    github: "https://github.com/Guzmance/Netflix-Clone.git",
    demo: "https://github.com/Guzmance/Netflix-Clone.git",
  },
  {
    id: 7,
    image: IMG2,
    title: "Poke API",
    github: "https://github.com/Guzmance/PokeApi",
    demo: "https://github.com/Guzmance/PokeApi",
  },
  {
    id: 8,
    image: IMG3,
    title: "Rick and Morty API ",
    github: "https://github.com/Guzmance/RickandMortyAPI",
    demo: "https://github.com/Guzmance/RickandMortyAPI",
  },
  {
    id: 10,
    image: IMG10,
    title: "Collaboration with Metrics App",
    demo: "http://lighthousedev.database.windows.net/",
  },
  {
    id: 11,
    image: IMG11,
    title: "Collaboration with Tu Facturacion App",
    demo: "https://tufacturacion.app/",
  },
];

const Portfolio = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isTabletScreen = useMediaQuery({ maxWidth: 1024 });

  let slidesPerView = 3;
  if (isSmallScreen) {
    slidesPerView = 1;
  } else if (isTabletScreen) {
    slidesPerView = 2;
  }
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Swiper
        className="container portfolio_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <SwiperSlide key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn btn-primary">
                  Github
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
