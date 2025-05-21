import React, { useContext } from "react";
import "./Projects.css";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  const projects = [
    {
      title: "📝 Not Defteri (Electron)",
      description:
        "Electron.js ile masaüstü için geliştirdiğim basit bir not defteri uygulamasıdır. Not yazma, kaydetme ve silme işlevleri içerir.",
      tech: "Electron, HTML, CSS, JavaScript",
      link: "https://github.com/atg81/not-defteri",
    },
    {
      title: "🛠️ Windows Service GUI",
      description:
        "Windows hizmetlerini başlatma, durdurma ve kontrol etme işlemlerini yapabileceğiniz bir masaüstü uygulaması.",
      tech: "C++, Qt, Qt Creator",
      link: "https://github.com/atg81/windows-service-gui",
    },
  ];

  return (
    <section id="projects" className={`projects-section ${theme}`}>
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="section-title">Projelerim</h2>
        <div className="project-list">
          {projects.map((project, i) => (
            <motion.div
              className="project-card"
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={projectVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Teknolojiler:</strong> {project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                GitHub'da Görüntüle
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
