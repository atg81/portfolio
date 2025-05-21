import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.footer
      className={`footer ${theme}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://github.com/atg81" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmet-taner-gümüş-19a2912a5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:ahmtanergms.81@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">© 2025 Ahmet Taner Gümüş. Tüm hakları saklıdır.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
