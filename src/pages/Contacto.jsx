import React from 'react';

const Contacto = () => {
  return (
    <>
      <section className="header-content container">
        <div className="header-txt">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Teléfono</h3>
              <p className="contact-detail">
                <a href="tel:2381111160">238 111 1160</a>
              </p>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Correo Electrónico</h3>
              <p className="contact-detail">
                <a href="mailto:danielcontrapunto@gmail.com">danielcontrapunto@gmail.com</a>
              </p>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Dirección</h3>
              <p className="contact-detail">
                2 Poniente #229<br />
                Col. Centro<br />
                Tehuacán, Puebla
              </p>
            </div>
          </div>

          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d236.52565456186562!2d-97.39786348466546!3d18.46505722844814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1757444017602!5m2!1ses-419!2smx" 
              allowFullScreen 
              loading="lazy"
              style={{ width: '100%', height: '400px', border: 'none', borderRadius: '10px' }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;