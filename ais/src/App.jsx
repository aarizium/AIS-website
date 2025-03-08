import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar"; // Ensure correct casing
import SidebarButton from "./components/SidebarButton"; 
import HomeProduct from "./components/HomeProduct";
import Footer from "./components/Footer";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
