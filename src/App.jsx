import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import ServicioItem from './pages/ServicioItem';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Playera from "./pages/Playera";
import Gorra from "./pages/Gorra";
import Sudadera from "./pages/Sudadera";
import Taza from "./pages/Taza";
import Vaso from "./pages/Vaso";
import Cilindro from "./pages/Cilindro";
import Lapicero from "./pages/Lapicero";
import Playera_sublimable from "./pages/Playera_sublimable";
import Tarro from "./pages/Tarro";
import Servilleta from "./pages/Servilleta";
import MousePad from "./pages/MousePad";
import Lanyard from "./pages/Lanyard";
import Rompecabezas from "./pages/Rompecabezas";
import Menu from "./pages/Menu";
import Mylar from "./pages/Mylar";
import Llavero from "./pages/Llavero";
import Acojinado from "./pages/Acojinado";
import Llavero_sublimable from "./pages/Llavero_sublimable";
import Bolsa_tergal from "./pages/Bolsa_tergal";
import Tarjetas from "./pages/Tarjetas";
import Vinil from "./pages/Vinil";
import Holografica from "./pages/Holografica";
import Playera_vinil from "./pages/Playera_vinil";
import Sudadera_vinil from "./pages/Sudadera_vinil";
import Vinil_metro from "./pages/Vinil_metro";
import Vinil_microperforado from "./pages/Vinil_microperforado";


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
        marginBottom: '2rem' 
      }}
      onClick={handleBannerClick}
    >
      <img 
        src="/src/assets/images/bannernew.gif" 
        alt="Banner promocional"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '300px', // Alturamax
          objectFit: 'cover',
          borderRadius: '8px', 
        }}
      />
    </div>
  );
}

// Datos que usa Home
const oferts = [
  { id: 1, title: "VINIL", image: "/src/assets/images/vinil.jpg" },
  { id: 2, title: "Serigrafia", image: "/src/assets/images/serigrafia.jpg" },
  { id: 3, title: "Sublimacion", image: "/src/assets/images/sublimacion.jpg" },
];

const products = [
  { id: 1, name: "Combo", description: "Playera y gorra sublimada", price: 210, image: "/src/assets/images/combo.jpeg" },
  { id: 2, name: "Taza Sublimada", description: "Diseño a todo color", price: 60, image: "/src/assets/images/taza.jpeg" },
  { id: 3, name: "Invitación", description: "Completamente personalizada", price: 12, image: "/src/assets/images/invitacion.jpeg" },
  { id: 4, name: "Tarro sublimado", description: "Completamente personalizado", price: 200, image: "/src/assets/images/tarro.jpeg" },
  { id: 5, name: "Termo", description: "Diseño a todo color", price: 200, image: "/src/assets/images/termo.jpeg" },
  { id: 6, name: "Senaletica", description: "Diseño personalizado", price: 75, image: "/src/assets/images/senaletica.png" },
];

const icons = [
  {
    id: 1,
    image: "/src/assets/images/sublimacion.jpg",
    title: "Playera",
    text: "Impresión de alta calidad",
    linkTo: "/playera"  
  },
  {
    id: 2,
    image: "https://www.sportcaps.com.mx/cdn/shop/files/gorra_sportcaps_trucker_esponja_azul_rey_upc_7506306189423-1.jpg?v=1745284082",
    title: "Gorra Trucker",
    text: "Personalizada",
    linkTo: "/gorra" 
  },
  {
    id: 3,
    image: "https://optimamayoreo.com.mx/wp-content/uploads/2024/11/38103-05102-1000x1000.jpg",
    title: "Sudadera Estampada",
    text: "Arte personalizado",
    linkTo: "/sudadera"  
  },
];

const blogs = [
  { id: 1, image: "/src/assets/images/b1.jpg", title: "Blog 1", text: "Parrafo random" },
  { id: 2, image: "/src/assets/images/b2.jpg", title: "Blog 2", text: "Parrafo random" },
  { id: 3, image: "/src/assets/images/b3.jpg", title: "Blog 3", text: "Parrafo random" },
];

// Layout para mantener Header y Footer
function AppLayout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      {children}
      <Footer />
    </CartProvider>
  );
}

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Home oferts={oferts} products={products} icons={icons} blogs={blogs} banner={<BannerGif />} />
      </AppLayout>
    ),
  },
  { 
    path: "/servicios", 
    element: (
      <AppLayout>
        <Servicios />
      </AppLayout>
    ) 
  },
  { 
    path: "/contacto", 
    element: (
      <AppLayout>
        <Contacto />
      </AppLayout>
    ) 
  },
  { 
    path: "/playera", 
    element: (
      <AppLayout>
        <Playera />
      </AppLayout>
    ) 
  },
  { 
    path: "/gorra", 
    element: (
      <AppLayout>
        <Gorra />
      </AppLayout>
    ) 
  },
  { 
    path: "/sudadera", 
    element: (
      <AppLayout>
        <Sudadera />
      </AppLayout>
    ) 
  },
  {
    path: "/:servicio",
    element: (
      <AppLayout>
        <ServicioItem />
      </AppLayout>
    )
  },
   {
    path: "/taza",
    element: (
      <AppLayout>
        <Taza />
      </AppLayout>
    )
  },

  {
    path: "/vaso",
    element: (
      <AppLayout>
        <Vaso />
      </AppLayout>
    )
  },

   {
    path: "/cilindro",
    element: (
      <AppLayout>
        <Cilindro />
      </AppLayout>
    )
  },

     {
    path: "/lapicero",
    element: (
      <AppLayout>
        <Lapicero />
      </AppLayout>
    )
  },

      {
    path: "/playera_sublimable",
    element: (
      <AppLayout>
        <Playera_sublimable />
      </AppLayout>
    )
  },

  
   {
    path: "/Tarro",
    element: (
      <AppLayout>
        <Tarro />
      </AppLayout>
    )
  },
  
   {
    path: "/Servilleta",
    element: (
      <AppLayout>
        <Servilleta />
      </AppLayout>
    )
  },

     {
    path: "/MousePad",
    element: (
      <AppLayout>
        <MousePad />
      </AppLayout>
    )
  },
  
       {
    path: "/Lanyard",
    element: (
      <AppLayout>
        <Lanyard />
      </AppLayout>
    )
  },

       {
    path: "/Rompecabezas",
    element: (
      <AppLayout>
        <Rompecabezas />
      </AppLayout>
    )
  },

     {
    path: "/menu",
    element: (
      <AppLayout>
        <Menu />
      </AppLayout>
    )
  },
  
   {
    path: "/mylar",
    element: (
      <AppLayout>
        <Mylar />
      </AppLayout>
    )
  },
   {
    path: "/llavero",
    element: (
      <AppLayout>
        <Llavero />
      </AppLayout>
    )
  },

        {
    path: "/llavero",
    element: (
      <AppLayout>
        <Acojinado />
      </AppLayout>
    )
  },

          {
    path: "/llavero_sublimable",
    element: (
      <AppLayout>
        <Llavero_sublimable />
      </AppLayout>
    )
  },

          {
    path: "/mouse-pad",
    element: (
      <AppLayout>
        <MousePad />
      </AppLayout>
    )
  },

            {
    path: "/bolsa-tergal",
    element: (
      <AppLayout>
        <Bolsa_tergal />
      </AppLayout>
    )
  },

              {
    path: "/tarjeta-presentacion",
    element: (
      <AppLayout>
        <Tarjetas />
      </AppLayout>
    )
  },

              {
    path: "/etiqueta-vinil",
    element: (
      <AppLayout>
        <Vinil />
      </AppLayout>
    )
  },

                {
    path: "/etiqueta-holografica",
    element: (
      <AppLayout>
        <Holografica />
      </AppLayout>
    )
  },

                  {
    path: "/vinil-playera",
    element: (
      <AppLayout>
        <Playera_vinil />
      </AppLayout>
    )
  },

                    {
    path: "/vinil-sudadera",
    element: (
      <AppLayout>
        <Sudadera_vinil />
      </AppLayout>
    )
  },

                      {
    path: "/vinil-microperforado",
    element: (
      <AppLayout>
        <Vinil_microperforado />
      </AppLayout>
    )
  },



   
  
]);

export default function App() {
  return <RouterProvider router={router} />;
}