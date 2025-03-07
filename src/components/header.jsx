import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    return (
        <motion.header
            className="header"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
        >
            <h1>Meu Portfólio</h1>
            <nav>
                <a href="#about">Sobre Mim</a>
                <a href="#experience">Experiências</a>
                <a href="#projects">Projetos</a>
                <a href="#contact">Contato</a>
            </nav>
        </motion.header>
    );
};

export default Header;
