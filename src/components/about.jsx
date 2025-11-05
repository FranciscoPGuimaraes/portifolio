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
                <img 
                    src="assets/xico.jpg" 
                    alt="Francisco Pereira Guimarães" 
                    className='about-image' 
                />
                <p>
                    Olá! Meu nome é <span className="destaque">Francisco Pereira Guimarães</span>, 
                    sou <span className="destaque">Engenheiro de Software</span> com foco em 
                    <span className="destaque"> desenvolvimento Full Stack e Inteligência Artificial</span>. 
                    Atualmente atuo como Software Engineer na <span className="destaque">Levt</span> e também colaboro 
                    em projetos como <span className="destaque">freelancer</span> para empresas internacionais, como a 
                    <span className="destaque"> IFoot</span> (Canadá).
                </p>

                <p>
                    Tive experiências marcantes na <span className="destaque">Embraer</span>, 
                    desenvolvendo soluções de Machine Learning aplicadas ao domínio financeiro, 
                    com foco em <span className="destaque">automação, previsão e análise inteligente</span>. 
                    Também trabalhei no <span className="destaque">INATEL</span>, contribuindo com o desenvolvimento 
                    de sistemas web e aplicações voltadas à segurança cibernética e saúde.
                </p>

                <p>
                    Tenho experiência prática em tecnologias como <span className="destaque">Java, Node.js, React, Angular, 
                    Python, FastAPI e PostgreSQL</span>, além de integração com serviços em nuvem, 
                    pipelines CI/CD e automações com IA.
                </p>

                <p>
                    Sou movido por desafios que unem <span className="destaque">engenharia de software e inteligência artificial</span>, 
                    buscando sempre criar soluções escaláveis, inteligentes e que gerem impacto real nos negócios.
                </p>
            </div>
        </motion.section>
    );
};

export default About;
