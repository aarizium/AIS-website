import React, { useState } from "react";
import styles from "./Navbar.module.css";
import SidebarButton from "./SidebarButton";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles.navbarContainer}>
        {/* Sidebar Toggle Button */}
        <SidebarButton toggleSidebar={toggleSidebar} />

        {/* Navigation Menu */}
        <nav>
          <ul className={styles.navLinks}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." className={styles.searchbar} />
          <button className={styles.searchBtn}>🔍</button>
        </div>

        {/* Authentication Buttons */}
        <div className={styles.authButtons}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signupBtn}>Sign Up</button>
        </div>
      </header>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
