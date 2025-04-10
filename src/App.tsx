import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./layouts/navbar";
import { HomePage } from "./pages/home-page";
import { ContactPage } from "./pages/contact-page";
import { MenuPage } from "./pages/menu-page";
import { CartPage } from "./pages/cart-page";
import { NotFoundPage } from "./pages/not-found-page";
import ProductPage from "./pages/product-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/productos/:slug" element={<ProductPage />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
