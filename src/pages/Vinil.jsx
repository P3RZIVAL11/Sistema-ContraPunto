import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Vinil = () => {
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
      id: `playera-${selectedColor}-${selectedSize}`,
      name: 'Taza Personalizada',
      price: 60.00,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      image: 'https://m.media-amazon.com/images/I/61-gPGG7umL._UF894,1000_QL80_.jpg',
      category: 'playera'
    };
    
    addToCart(product);
    //alert('¡Producto añadido al carrito!');
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

      <div className="container-title">TAZA</div>

      <main>
        <div className="container-img">
          <img
            src="https://m.media-amazon.com/images/I/61-gPGG7umL._UF894,1000_QL80_.jpg"
            alt="Taza personalizada"
          />
        </div>
        
        <div className="container-info-product">
          <div className="container-price">
            <span>$60.00 MXN</span>
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
                <option value="rojo">Rojo</option>
                <option value="blanco">Blanco</option>
                <option value="beige">Beige</option>
                <option value="negro">Negro</option>
                <option value="azul">Azul</option>
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
                <option value="xch">XCH</option>
                <option value="ch">CH</option>
                <option value="m">M</option>
                <option value="g">G</option>
                <option value="xg">XG</option>
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
                <p><strong>Playera 100% Algodón</strong></p>
                <p>• Impresión a todo color tamaño A4</p>
                <p>• Material: 100% algodón premium</p>
                <p>• Colores vibrantes y duraderos</p>
                <p>• Lavable y resistente</p>
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
                <p>• El tipo de impresión varía de acuerdo al diseño</p>
                <p>• Tiempo de producción: 2-3 días hábiles</p>
                <p>• Envíos disponibles a toda la república</p>
                <p>• Personalización mínima: 5 piezas</p>
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
                <p>⭐️⭐️⭐️⭐️⭐️ "Excelente calidad de impresión" - María G.</p>
                <p>⭐️⭐️⭐️⭐️⭐️ "Los colores son muy vibrantes" - Juan P.</p>
                <p>⭐️⭐️⭐️⭐️⭐️ "Perfecta para eventos" - Laura M.</p>
              </div>
            )}
          </div>

          
        </div>
      </main>
    </div>
  );
};

export default Vinil;