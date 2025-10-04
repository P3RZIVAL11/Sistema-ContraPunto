import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ number, title, description, image, reverse }) => {
  return (
    <motion.div 
      className={`process-step ${reverse ? 'reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="process-number">
        <motion.div 
          className="number-circle"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {number}
        </motion.div>
      </div>
      
      <div className="process-content">
        <div className="process-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        
        <div className="process-image">
          <motion.img 
            src={image} 
            alt={title} 
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessStep;