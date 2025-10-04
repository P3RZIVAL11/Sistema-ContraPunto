import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const IconItem = ({ icon }) => {
  return (
    <motion.div 
      className="icon-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="icon-img">
        <img src={icon.image} alt={icon.title} />
      </div>
      <div className="icon-txt">
        <h3>{icon.title}</h3>
        <p>{icon.text}</p>
        
        {/* Boton que redirige a otra pagina */}
        {icon.linkTo && (
          <Link 
            to={icon.linkTo} 
            className="btn-2"
            style={{
              display: 'inline-block',
              marginTop: '15px',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            Ver Más
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default IconItem;