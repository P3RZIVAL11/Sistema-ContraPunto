import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="link">
          <h3>Contacto</h3>
          <p className="contact-detail">
            <a href="tel:2381111160">238 111 1160</a>
          </p>
          <p className="contact-detail">
            <a href="mailto:danielcontrapunto@gmail.com">danielcontrapunto@gmail.com</a>
          </p>
          <p className="contact-detail">
            2 Poniente #229, Col. Centro<br />
            Tehuacán, Puebla
          </p>
        </div>

        <div className="link">
          <h3>Servicios</h3>
          <ul>
            <li><a href="/servicios">Serigrafía</a></li>
            <li><a href="/servicios">Sublimación</a></li>
            <li><a href="/servicios">Impresiones</a></li>
            <li><a href="/servicios">Vinil</a></li>
          </ul>
        </div>

        <div className="link">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="#productos">Productos</a></li>
          </ul>
        </div>

        <div className="link">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="copyright container">
        <p>&copy; 2025 Contrapunto. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;