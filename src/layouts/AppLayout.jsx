import React, { useState } from "react"; 
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <main style={{ padding: 20 }}>{children}</main>
      <Footer />
    </CartProvider>
  );
}