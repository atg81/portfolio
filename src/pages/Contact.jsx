import React, { useState, useContext } from 'react';
import './Contact.css';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', message: '' });
  const { theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mesaj gönderildi!\n\nAd: ${form.name}\nMesaj: ${form.message}`);
    setForm({ name: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="iletisim" className={`contact ${theme}`}>
      <motion.div
        className="contact-wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          İletişim
        </motion.h2>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <input
            type="text"
            name="name"
            placeholder="Adınız Soyadınız"
            value={form.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Gönder</button>
        </motion.form>

        <motion.div className="contact-info" variants={itemVariants}>
          <p><strong>Email:</strong> ahmtanergms.81@gmail.com</p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/ahmet-taner-gümüş-19a2912a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profilim
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/atg81"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profilim
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
