import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Gorra = () => {
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
      id: `gorra-${selectedColor}-${selectedSize}`,
      name: 'Gorra Personalizada',
      price: 150.00,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'gorra'
    };
    
    addToCart(product);
    //alert('¡Gorra añadida al carrito!');
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

      <div className="container-title">GORRA PERSONALIZADA</div>

      <main>
        <div className="container-img">
          <img
            src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Gorra personalizada"
          />
        </div>
        
        <div className="container-info-product">
          <div className="container-price">
            <span>$150.00 MXN</span>
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
                <option value="blanca">Blanca</option>
                <option value="azul">Azul Marina</option>
                <option value="roja">Roja</option>
                <option value="verde">Verde</option>
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
                <option value="ajustable">Ajustable</option>
                <option value="s">S (54-55 cm)</option>
                <option value="m">M (56-57 cm)</option>
                <option value="l">L (58-59 cm)</option>
                <option value="xl">XL (60-61 cm)</option>
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
                <p><strong>Gorra de alta calidad</strong></p>
                <p>• Material: 100% algodón</p>
                <p>• Ajuste perfecto y cómodo</p>
                <p>• Visera curva para mejor protección solar</p>
                <p>• Personalización frontal y lateral disponible</p>
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
                <p>• Ideal para eventos deportivos y promocionales</p>
                <p>• Resistente al lavado y al uso diario</p>
                <p>• Disponible en sistema de cierre ajustable</p>
                <p>• Mínimo de personalización: 10 piezas</p>
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
                <p>⭐️⭐️⭐️⭐️⭐️ "Muy cómoda y de buena calidad" - Carlos R.</p>
                <p>⭐️⭐️⭐️⭐️⭐️ "Perfecta para nuestro equipo" - Diego M.</p>
                <p>⭐️⭐️⭐️⭐️⭐️ "Excelente protección solar" - Ana L.</p>
              </div>
            )}
          </div>


        </div>
      </main>
    </div>
  );
};

export default Gorra;