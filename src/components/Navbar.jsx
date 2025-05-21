import React, { useContext } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-left">
        <div className="logo">Ahmet Taner Gümüş</div>
      </div>

      <div className="navbar-center">
        <Scrollspy
          items={['anasayfa', 'hakkımda', 'skills', 'projects', 'iletisim']}
          currentClassName="active"
          className="nav-links"
          offset={-120} // 👈 Burayı ekledik, iletişim gibi altta kalanlar için kritik
        >
          <li>
            <Link to="anasayfa" smooth={true} duration={500} offset={-120} spy={true} activeClass="active">
              Ana sayfa
            </Link>
          </li>
          <li>
            <Link to="hakkımda" smooth={true} duration={500} offset={-120} spy={true} activeClass="active">
              Hakkımda
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-120} spy={true} activeClass="active">
              Neler Yapabilirim
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-120} spy={true} activeClass="active">
              Projelerim
            </Link>
          </li>
          <li>
            <Link to="iletisim" smooth={true} duration={500} offset={-120} spy={true} activeClass="active">
              İletişim
            </Link>
          </li>
        </Scrollspy>
      </div>

      <div className="navbar-right">
        <a href="https://www.linkedin.com/in/ahmet-taner-gümüş-19a2912a5/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/atg81" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/ahmtaner_81" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Tema değiştir">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
