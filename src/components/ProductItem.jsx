import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      className="product"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        scale: 1.03
      }}
    >
      <img src={product.image} alt={product.name} />
      <div className="product-txt">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="precio">${product.price}</p>
        <button 
          className="agregar-carrito btn-2"
          onClick={() => {
            const productWithQuantity = { ...product, quantity: 1 };
            addToCart(productWithQuantity);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </motion.div>
  );
};

export default ProductItem;