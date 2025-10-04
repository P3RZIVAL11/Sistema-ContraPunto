import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Servilleta = () => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [descriptionOpen, setDescriptionOpen] = useState(true);
  const [infoOpen, setInfoOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Por favor selecciona color y talla');
      return;
    }

    const product = {
      id: `sudadera-${selectedColor}-${selectedSize}`,
      name: 'Sudadera Personalizada',
      price: 350.00,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'sudadera'
    };
    
    addToCart(product);
    //alert('¡Sudadera añadida al carrito!');
  };

  const handleClean = () => {
    setSelectedColor('');
    setSelectedSize('');
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="product-page">
      <header>
        <h1>Contrapunto Creativos</h1>
      </header>

      <div className="container-title">SUDADERA PERSONALIZADA</div>

      <main>
        <div className="container-img">
          <img
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Sudadera personalizada"
          />
        </div>
        
        <div className="container-info-product">
          <div className="container-price">
            <span>$350.00 MXN</span>
          </div>

          <div className="container-details-product">
            <div className="form-group">
              <label htmlFor="colour">Color</label>
              <select 
                name="colour" 
                id="colour"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="">Escoge una opción</option>
                <option value="negra">Negra</option>
                <option value="gris">Gris</option>
                <option value="azul">Azul Marino</option>
                <option value="roja">Roja</option>
                <option value="verde">Verde Olivo</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="size">Talla</label>
              <select 
                name="size" 
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Escoge una opción</option>
                <option value="ch">CH</option>
                <option value="m">M</option>
                <option value="g">G</option>
                <option value="xg">XG</option>
                <option value="xxg">XXG</option>
              </select>
            </div>

            <button className="btn-clean" onClick={handleClean}>
              Limpiar selección
            </button>
          </div>

          <div className="container-add-cart">
            <div className="container-quantity">
              <input
                type="number"
                value={quantity}
                min="1"
                className="input-quantity"
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              />
              <div className="btn-increment-decrement">
                <i className="fa-solid fa-chevron-up" onClick={incrementQuantity}></i>
                <i className="fa-solid fa-chevron-down" onClick={decrementQuantity}></i>
              </div>
            </div>
            
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              <i className="fa-solid fa-plus"></i>
              Añadir al carrito
            </button>
          </div>

          <div className="container-description">
            <div 
              className="title-description"
              onClick={() => setDescriptionOpen(!descriptionOpen)}
            >
              <h4>Descripción</h4>
              <i className={`fa-solid fa-chevron-${descriptionOpen ? 'up' : 'down'}`}></i>
            </div>
            
            {descriptionOpen && (
              <div className="text-description">
                <p><strong>Sudadera premium con capucha</strong></p>
                <p>• Material: 80% algodón, 20% poliéster</p>
                <p>• Forro polar interior suave y cálido</p>
                <p>• Capucha con cordón ajustable</p>
                <p>• Bolsillo tipo canguro frontal</p>
                <p>• Personalización en espalda y pecho</p>
              </div>
            )}
          </div>

          <div className="container-additional-information">
            <div 
              className="title-additional-information"
              onClick={() => setInfoOpen(!infoOpen)}
            >
              <h4>Información adicional</h4>
              <i className={`fa-solid fa-chevron-${infoOpen ? 'up' : 'down'}`}></i>
            </div>
            
            {infoOpen && (
              <div className="text-additional-information">
                <p>• Ideal para clima frío y uso casual</p>
                <p>• Costuras reforzadas para mayor durabilidad</p>
                <p>• Disponible con y sin cremallera</p>
                <p>• Mínimo de personalización: 5 piezas</p>
                <p>• Tiempo de producción: 3-5 días hábiles</p>
              </div>
            )}
          </div>

          <div className="container-reviews">
            <div 
              className="title-reviews"
              onClick={() => setReviewsOpen(!reviewsOpen)}
            >
              <h4>Reseñas</h4>
              <i className={`fa-solid fa-chevron-${reviewsOpen ? 'up' : 'down'}`}></i>
            </div>
            
            {reviewsOpen && (
              <div className="text-reviews">
                <p>⭐️⭐️⭐️⭐️⭐️ "Super cálida y de excelente calidad" - Roberto S.</p>
                <p>⭐️⭐️⭐️⭐️⭐️ "Perfecta para el invierno" - Sofia M.</p>
                <p>⭐️⭐️⭐️⭐️⭐️ "El diseño quedó espectacular" - Miguel A.</p>
              </div>
            )}
          </div>

       
        </div>
      </main>
    </div>
  );
};

export default Servilleta;