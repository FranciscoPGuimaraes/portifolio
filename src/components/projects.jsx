import React from 'react';
import { motion } from 'framer-motion';
import './projects.css';

const projects = [
    {
        nome: "Connect Farm - App",
        descricao: "Plataforma para auxiliar na gestão e analise de dados de produtores pecuários.",
        tecnologias: ["reactjs", "nextjs", "nodejs", "mongodb", "SQL"],
        link: "https://github.com/seu-usuario/sistema-previsao-vendas"
    },
    {
        nome: "Connect Farm - API",
        descricao: "Plataforma para auxiliar na gestão e analise de dados de produtores pecuários.",
        tecnologias: ["python", "fastapi", "mongodb", "SQL"],
        link: "https://github.com/seu-usuario/sistema-previsao-vendas"
    },
];

const Projects = () => {
    return (
        <motion.section 
            id="projects" 
            className="projects-section"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h2>Projetos</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="project-card"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3>{project.nome}</h3>
                        <p className="project-desc">{project.descricao}</p>
                        <div className="project-techs">
                            {project.tecnologias.map((tech, i) => (
                                <span key={i} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
