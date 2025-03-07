import React from 'react';
import { motion } from 'framer-motion';
import 'src/components/experience.css';

const experiences = [
    {
        empresa: "OpenAI",
        data: "Jan 2024 - Fev 2025",
        tecnologias: ["Python", "SQL", "TensorFlow"],
        atividades: "Criação de modelos de IA para previsão de demanda e otimização logística."
    },
    {
        empresa: "Empresa X",
        data: "Mar 2023 - Dez 2023",
        tecnologias: ["Pandas", "Power BI", "Azure"],
        atividades: "Automatização de relatórios e dashboards para diretoria."
    }
];

const Experience = () => {
    return (
        <motion.section
            id="experience"
            className="experience-section"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h2>Experiências</h2>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <motion.div 
                        className="experience-card"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3>{exp.empresa}</h3>
                        <p className="exp-data">{exp.data}</p>
                        <div className="exp-tecnologias">
                            {exp.tecnologias.map((tech, i) => (
                                <span key={i} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                        <p className="exp-atividades">{exp.atividades}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Experience;
