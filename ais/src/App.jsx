import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
// import HomeProduct from "./components/HomeProduct";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Brands from "./components/Brands";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar with Sidebar Toggle */}
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
      
      {/* Brands Section */}
      <Brands />

      {/* Sidebar */}
      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      
      <Footer />
    </div>
  );
}

export default App;
