import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isCartOpen, setIsCartOpen }) => {
  const { cartItems, clearCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar men al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className={`menu container ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <Link to="/" className="logo">Contrapunto Creativos</Link>

        {/* Botón menú móvil */}
        <label 
          htmlFor="menu" 
          className="menu-icono"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ cursor: 'pointer' }}
        >
          <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: '#333', margin: '5px 0' }}></span>
          <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: '#333', margin: '5px 0' }}></span>
          <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: '#333', margin: '5px 0' }}></span>
        </label>

        {/* Navegacion */}
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/servicios" 
                className={location.pathname === '/servicios' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                to="/contacto" 
                className={location.pathname === '/contacto' ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Carrito */}
        <div>
          <ul>
            <li className="submenu">
              <img
                src="/src/assets/images/car.svg"
                id="img-carrito"
                alt="carrito"
                className="menu-icono"
                onClick={() => setIsCartOpen(!isCartOpen)}
                style={{ cursor: 'pointer', width: '25px', height: '25px' }}
              />
              {cartItems.length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#ff4757',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {cartItems.length}
                </span>
              )}
              <CartModal
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                clearCart={clearCart}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;