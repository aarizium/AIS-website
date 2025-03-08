import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar"; // Ensure correct casing
import SidebarButton from "./components/SidebarButton"; 
import HomeProduct from "./components/HomeProduct";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Brands from "./components/Brands";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header />
      <Navbar />
      <Brands />
      <SidebarButton toggleSidebar={() => setIsOpen(!isOpen)} />
      <div className={`sidebar-container ${isOpen ? "open" : ""}`} id="sideBar">
        <Sidebar />
      </div>
      <HomeProduct/>
      <Footer />
    </div>
  );
}

export default App;
