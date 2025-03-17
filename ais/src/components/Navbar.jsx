import React from "react";
import styles from "./Navbar.module.css"; 
import SidebarButton from "./SidebarButton";

const Navbar = ({ toggleSidebar }) => {
  return (
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
  );
};

export default Navbar;
