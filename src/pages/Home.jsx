import React from 'react';
import OfertItem from "../components/OfertItem";
import ProductItem from "../components/ProductItem";
import IconItem from "../components/IconItem";
import BlogItem from "../components/BlogItem";
import { useNavigate } from "react-router-dom";


function BannerGif() {
  const navigate = useNavigate();
  
  
  const handleBannerClick = () => {
    
    navigate("/servicios");
  };

  return (
    <div 
      className="banner-gif-container"
      style={{ 
        width: '100%', 
        cursor: 'pointer',
        marginBottom: '2rem',
        padding: '0 1rem' 
      }}
      onClick={handleBannerClick}
    >
      <img 
        src="/src/assets/images/banner.gif" 
        alt="Banner promocional"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '300px', // Alturamax
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
        }}
      />
    </div>
  );
}

function Home({ oferts, products, icons, blogs }) {
  return (
    <>
      <section className="header-content container">
        <div className="header-img">
          <img src="/src/assets/images/logo_contra.png" alt="Contrapunto Creativos" />
        </div>
        <div className="header-txt">
          <h1>Contrapunto Creativos</h1>
          <p>Creamos para conectar contigo</p>
          <a href="#" className="btn-1">Información</a>
        </div>
      </section>

      <section className="ofert container">
        {oferts.map(ofert => (
          <OfertItem key={ofert.id} ofert={ofert} />
        ))}
      </section>

      <div className="container">
        <BannerGif />
      </div>

      <main className="products container" id="lista-1">
        <h2>Productos</h2>
        <div className="product-content">
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </main>

      <section className="icons container">
        {icons.map(icon => (
          <IconItem key={icon.id} icon={icon} />
        ))}
      </section>

      <section className="blog container">
        {blogs.map(blog => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </section>
    </>
  );
}

export default Home;