import React from 'react';
import { motion } from 'framer-motion';

const TecnicaHero = ({ title, subtitle, image }) => {
  return (
    <section className="tecnica-hero">
      <div className="container">
        <motion.div 
          className="tecnica-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="tecnica-hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <img src={image} alt={title} />
        </motion.div>
      </div>
      
      <motion.div 
        className="tecnica-hero-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default TecnicaHero;