import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

const About = () => {
    return (
        <motion.section 
            id="about" 
            className="about-section"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h2>Sobre Mim</h2>
            <div className="about-content">
                <p>
                    Olá! Meu nome é <span className="destaque">Francisco Pereira Guimarães</span> e sou apaixonado por dados e tecnologia. Estou me formando em Engenharia de Software e hoje trabalho com Ciências de dados na Embraer em projetos de Machine Learning.
                </p>
                <p>
                    Já atuei em projetos que envolvem desde a <span className="destaque">limpeza e análise de dados</span>, até a criação de modelos preditivos para otimizar processos e reduzir custos. Adoro explorar novas ferramentas e linguagens, sempre buscando evoluir e me adaptar às demandas do mercado.
                </p>
                <p>
                    Meu grande objetivo é me tornar referência em <span className="destaque">Ciencias de dados</span>, contribuindo para a criação de soluções inovadoras e acessíveis para empresas de todos os portes.
                </p>
            </div>
        </motion.section>
    );
};

export default About;
