import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServicioItem = () => {
  const { servicio } = useParams();

  // Mapeo de titulos  para las URLs
  const titulos = {
    'playera': 'Playeras Personalizadas',
    'gorra': 'Gorras Personalizadas',
    'sudadera': 'Sudaderas Personalizadas',
    'vaso': 'Vasos Personalizados',
    'taza': 'Tazas Personalizadas',
    'volantes': 'Volantes Publicitarios',
    'invitaciones': 'Invitaciones Personalizadas',
    // Agrega mas mapeos
  };

  const titulo = titulos[servicio] || servicio.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="product-page">
      <header>
        <h1>Contrapunto Creativos</h1>
      </header>

      <div className="container-title">{titulo}</div>

      <main>
        <div className="container-img">
          <img
            src="/src/assets/images/logo_contra.png"
            alt={titulo}
            style={{ maxWidth: '300px' }}
          />
        </div>
        
        <div className="container-info-product">
          <div className="container-price">
            <span>Cotización personalizada</span>
          </div>

          <div className="container-description">
            <div className="title-description">
              <h4>Descripción del Servicio</h4>
            </div>
            <div className="text-description">
              <p>Este servicio de <strong>{titulo.toLowerCase()}</strong> incluye:</p>
              <p>• Diseño personalizado</p>
              <p>• Materiales de alta calidad</p>
              <p>• Técnicas profesionales de impresión</p>
              <p>• Acabados duraderos</p>
              <p>• Entrega puntual</p>
            </div>
          </div>

          <div className="container-add-cart">
            <Link to="/contacto" className="btn-add-to-cart">
              <i className="fa-solid fa-envelope"></i>
              Solicitar Cotización
            </Link>
          </div>

          <div className="container-additional-information">
            <div className="title-additional-information">
              <h4>Información Adicional</h4>
            </div>
            <div className="text-additional-information">
              <p>• Tiempo de producción: 3-5 días hábiles</p>
              <p>• Mínimo de pedido: Varía según el producto</p>
              <p>• Opciones de entrega: Local y nacional</p>
              <p>• Garantía de calidad</p>
            </div>
          </div>

          <div className="container-social">
            <span>¿Necesitas más información?</span>
            <div className="container-buttons-social">
              <Link to="/contacto" className="btn-2">
                <i className="fa-solid fa-phone"></i>
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicioItem;