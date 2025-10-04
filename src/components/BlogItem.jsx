import React from 'react';
import { motion } from 'framer-motion';

const BlogItem = ({ blog }) => {
  return (
    <motion.div 
      className="blog-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      <img src={blog.image} alt={blog.title} />
      <h3>{blog.title}</h3>
      <p>{blog.text}</p>
    </motion.div>
  );
};

export default BlogItem;