import React, { useContext } from 'react';
import './Skills.css';
import { FaLaptopCode, FaMobileAlt, FaTools } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section id="skills" className={`skills-section ${theme}`}>
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="section-title">Neler Yapabilirim?</h2>
        <div className="skills-grid">
          {[ // Kartları sırayla göster
            {
              icon: <FaLaptopCode className="skill-icon" />,
              title: 'Web Geliştirme',
              desc:
                'React, HTML, CSS ve JavaScript kullanarak modern ve duyarlı web arayüzleri geliştiriyorum. Kullanıcı dostu ve işlevsel deneyimler sunmayı hedefliyorum.',
            },
            {
              icon: <FaMobileAlt className="skill-icon" />,
              title: 'Mobil Geliştirme',
              desc:
                'Kotlin diliyle Android platformu için uygulamalar geliştiriyorum. Mobil geliştirme alanında kendimi sürekli yeniliyor ve kullanıcı odaklı projeler üretiyorum.',
            },
            {
              icon: <FaTools className="skill-icon" />,
              title: 'Projelerle Öğrenme',
              desc:
                'Her yeni projede farklı teknolojiler öğreniyor ve pratiğe döküyorum. Yeni şeyler denemekten çekinmeden öğrenmeye devam ediyorum.',
            },
          ].map((skill, i) => (
            <motion.div
              className="skill-card"
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              {skill.icon}
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
