import React from 'react';
import { motion } from 'framer-motion';
import './experience.css';

const experiences = [
    {
        empresa: "Levt",
        data: "Abril 2024 - Atualmente",
        tecnologias: ["JavaScript", "Node.js", "ReactJS", "ElasticSearch", "Analytics", "GIT"],
        atividades: "Atuação como Engenheiro de Software, desenvolvendo soluções de BPM, integração de sistemas e análise de dados. Responsável por otimizar processos internos e criar dashboards interativos para visualização de métricas e indicadores de performance."
    },
    {
        empresa: "IFoot (Freelancer - Canadá)",
        data: "Abril 2024 - Atualmente",
        tecnologias: ["JavaScript", "Node.js", "ReactNative", "ReactJS", "Microservices", "Supabase", "PostgreSQL", "GIT"],
        atividades: "Desenvolvimento e manutenção da aplicação mobile e web do IFoot, uma plataforma internacional de aluguel de campos de futebol. Responsável pela criação de microserviços, integração de APIs externas e melhorias de performance."
    },
    {
        empresa: "Embraer S.A.",
        data: "Janeiro 2024 - Abril 2025",
        tecnologias: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "BigQuery", "SQL", "GIT"],
        atividades: "Desenvolvimento de pipelines de dados e modelos de Machine Learning voltados à área financeira. Responsável por processos de ETL, análise estatística e criação de modelos preditivos para otimização e automação de rotinas analíticas."
    },
    {
        empresa: "INATEL - Instituto Nacional de Telecomunicações",
        data: "Janeiro 2022 - Fevereiro 2025",
        tecnologias: ["SQL", "MongoDB", "Neo4j", "Python", "Java"],
        atividades: "Monitor de laboratório de bancos de dados relacionais e não relacionais, auxiliando alunos em práticas técnicas e projetos acadêmicos."
    },
    {
        empresa: "INATEL - Pesquisa em Cibersegurança",
        data: "Setembro 2023 - Janeiro 2024",
        tecnologias: ["Python", "Pandas", "Scikit-learn", "YOLO", "SQL", "GIT"],
        atividades: "Pesquisa científica em visão computacional e machine learning aplicada à detecção de ataques cibernéticos, com foco em classificação de padrões e análise de anomalias."
    },
    {
        empresa: "INATEL - Desenvolvimento Web Institucional",
        data: "Janeiro 2023 - Setembro 2023",
        tecnologias: ["ReactJS", "JavaScript", "PHP", "HTML", "CSS", "SQL"],
        atividades: "Desenvolvimento e manutenção do site institucional do INATEL, com foco em melhorias de SEO, desempenho e experiência do usuário."
    },
    {
        empresa: "INATEL - Pesquisa em IA e Acessibilidade",
        data: "Janeiro 2022 - Janeiro 2023",
        tecnologias: ["Python", "Pandas", "Scikit-learn", "GIT"],
        atividades: "Projeto de pesquisa em Inteligência Artificial aplicada ao processamento de linguagem natural, com foco em acessibilidade para pessoas com deficiência na fala."
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
