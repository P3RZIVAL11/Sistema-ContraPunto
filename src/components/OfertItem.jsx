import React from 'react';
import { motion } from 'framer-motion';

const OfertItem = ({ ofert }) => {
  return (
    <motion.div 
      className="ofert-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        scale: 1.03
      }}
    >
      <div className="ofert-img">
        <img src={ofert.image} alt={ofert.title} />
      </div>
      <div className="ofert-txt">
        <h3>{ofert.title}</h3>
        <a href="#" className="btn-2">Información</a>
      </div>
    </motion.div>
  );
};

export default OfertItem;