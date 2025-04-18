import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SidebarButton from "./components/SidebarButton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Brands from "./components/Brands";
import Header from "./components/Header";
import Categories from "./components/Categories";
import ProductDetails from "./components/product_details/ProductDetails";
import Gallery from "./components/Gallery";
import SecondPage from "./components/product_categories/SecondPage"; // Import SecondPage
import CartPage from "./components/CartPage"; // Import CartPage

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Brands />
        <SidebarButton toggleSidebar={() => setIsOpen(!isOpen)} />
        <div className={`sidebar-container ${isOpen ? "open" : ""}`} id="sideBar"></div>

        <Routes>
          <Route path="/" element={<>
            <Categories />
            <Gallery />
          </>} />
          <Route path="/categories/:name" element={<SecondPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} /> {/* Route for Cart Page */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
