import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CarritoPDF from './CarritoPDF';


const CartModal = ({ isOpen, onClose, cartItems, clearCart }) => {
  if (!isOpen) return null;

  return (
    <div className="carrito-modal open" style={{ display: 'block' }}>
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          color: 'white', 
          marginBottom: '15px',
          borderBottom: '2px solid var(--primary-color)',
          paddingBottom: '10px'
        }}>
          Carrito de Compras
        </h3>
        
        {cartItems.length === 0 ? (
          <p className="empty-cart" style={{ color: '#dcdcdc' }}>
            El carrito está vacío
          </p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
              }}>
                
                <span style={{ color: 'white', flex: 1 }}>
                  {item.quantity}
                </span>
                <span style={{ color: 'white', flex: 1 }}>
                  {item.name}
                </span>
                <span style={{ color: 'var(--primary-color)', fontWeight: 'bold', flex: 1  }}>
                  ${item.price}
                </span>
                              </div>
            ))}
            
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button 
                onClick={clearCart}
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '1px solid white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                Vaciar Carrito
              </button>
              <button 
                onClick={onClose}
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '1px solid white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                Cerrar
              </button>

              <PDFDownloadLink
                document={<CarritoPDF cartItems={cartItems} />}
                fileName="carrito.pdf"
                style={{
                  background: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                {({ loading }) => loading ? 'Generando PDF...' : 'Descargar PDF'}
              </PDFDownloadLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;