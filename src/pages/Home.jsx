import React, { useContext } from 'react';
import './Home.css';
import { ThemeContext } from '../context/ThemeContext';
import profileImg from '../assets/img.jpg';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="anasayfa" className={`home ${theme}`}>
      <div className="home-content">
        <img
          src={profileImg}
          alt="Ahmet Taner"
          className="profile-img"
          data-aos="zoom-in"
        />
        <h1 data-aos="fade-up" data-aos-delay="200">
          Merhaba, ben <span className="highlight">Ahmet Taner</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="400">
          Frontend geliştirme yolculuğumda hem web hem de mobil dünyada sağlam temeller atıyorum.
        </p>
      </div>
    </section>
  );
};

export default Home;

