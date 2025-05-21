import React, { useContext } from 'react';
import './About.css';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const About = () => {
  const { theme } = useContext(ThemeContext);

  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="hakkımda" className={`about ${theme}`}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2 className="section-title" variants={textVariants}>
          Hakkımda
        </motion.h2>

        <motion.p className="about-text" variants={textVariants}>
          Merhaba, ben <strong>Ahmet Taner Gümüş</strong>.<br />
          Balıkesir Üniversitesi 3. sınıf Bilgisayar Mühendisliği öğrencisiyim.<br />
          2021 yılında Düzce Cumhuriyet Anadolu Lisesi'nden mezun oldum.<br />
          Üniversite eğitimim süresince yazılım dünyasına olan ilgim giderek arttı.<br />
          Özellikle <strong>web ve mobil uygulama geliştirme</strong> alanlarında kendimi sürekli geliştirmeye çalışıyorum.<br />
          React, JavaScript ve modern frontend teknolojileriyle projeler üretmekten keyif alıyorum.<br />
          Kullanıcı odaklı ve estetik arayüzler geliştirmeye özen gösteriyorum.<br />
          Yeni teknolojileri keşfetmek ve farklı alanlarda deneyim kazanmak benim için oldukça heyecan verici.<br />
          Takım çalışmasına yatkın, öğrenmeye açık ve üretken bir yapıya sahibim.<br />
          Kariyer hedefim; etkili çözümler geliştiren, yaratıcı yazılım projelerinde yer almak ve sürekli olarak kendimi ileriye taşımaktır.

        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
