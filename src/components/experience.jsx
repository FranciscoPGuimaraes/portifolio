import React from 'react';
import { motion } from 'framer-motion';
import './experience.css';

const experiences = [
    {
        empresa: "Levty",
        data: "Abril 2024 - O momento",
        tecnologias: ["JavaScript", "Node.js", "Analytics", "ElasticSearch", "ReactJS", "GIT"],
        atividades: "Atuando como engenheiro de software, desenvolvendo soluções de BPM, integração de sistemas e análise de dados. Foco em otimização de processos e criação de dashboards para visualização de métricas."
    },
    {
        empresa: "IFoot",
        data: "Abril 2024 - O momento",
        tecnologias: ["JavaScript", "Node.js", "ReactNative", "ReactJS", "Micro-services", "Supabase", "Postgresql", "GIT"],
        atividades: "Atuando como desenvolvedor full-stack (freelancer), desenvolvendo e mantendo a aplicação mobile e web do IFoot, uma plataforma de aluguel de campos de futebol. Principalmente focado na criação de micro-serviços e integração com outros serviços."
    },
    {
        empresa: "Embreaer S.A.",
        data: "Jan 2024 - Abril 2025",
        tecnologias: ["Python", "Pandas", "Sklearn", "GIT", "ML", "BigQuery", "SQL", "TensorFlow"],
        atividades: "ETL, estudo de viabilidade, aplicação de estatística e criação de modelos de Machine Learning para dados da área financeira."
    },
    {
        empresa: "Empresa Inatel",
        data: "Jan 2022 - Fev 2025",
        tecnologias: ["SQL", "MongoDB", "Neo4j", "Python", "Java"],
        atividades: "Ministrar aulas de laboratório de banco de dados relacionais e não relacionais."
    },
    {
        empresa: "Empresa Inatel",
        data: "Set 2023 - Jan 2024",
        tecnologias: ["Python", "Pandas", "Sklearn", "GIT", "ML", "SQL", "Yolo"],
        atividades: "Iniciação científica em visão computacional e machine learning com foco em detecção de ataques suspeitos em cybersegurança."
    },
    {
        empresa: "Empresa Inatel",
        data: "Jan 2023 - Set 2023",
        tecnologias: ["SQL", "JavaScript", "PHP", "HTML", "CSS", "ReactJS"],
        atividades: "Desenvolvimento do site da instituição, manuntenção do site e melhoria de SEO."
    },
    {
        empresa: "Empresa Inatel",
        data: "Jan 2022 - Jan 2023",
        tecnologias: ["Python", "Pandas", "Sklearn", "GIT"],
        atividades: "Iniciação científica para desenvolvimento de IA com foco em processamento de linguagem natural para pessoas com deficiência na fala."
    },
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
