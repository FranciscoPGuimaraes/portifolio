import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Smartphone } from 'lucide-react';
import './contact.css';

const Contact = () => {
    return (
        <motion.section 
            id="contact" 
            className="contact-section"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h2>Contato</h2>
            <div className="contact-grid">
                <a href="mailto:seuemail@email.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <Mail className="contact-icon" />
                    <span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/seu-perfil/" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <Linkedin className="contact-icon" />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <Github className="contact-icon" />
                    <span>GitHub</span>
                </a>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <Smartphone className="contact-icon" />
                    <span>WhatsApp</span>
                </a>
            </div>
        </motion.section>
    );
};

export default Contact;
