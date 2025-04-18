import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link to navigate
import styles from "./Navbar.module.css";
import SidebarButton from "./SidebarButton";
import Sidebar from "./Sidebar";
import { useCart } from "./context/CartContext"; // 👈 Import useCart

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cartItems } = useCart(); // 👈 Get cartItems from context

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles.navbarContainer}>
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
          <input
            type="text"
            placeholder="🔍  Search products, brands, categories..."
            className={styles.searchbar}
          />
        </div>

        {/* Right Buttons */}
        <div className={styles.rightButtons}>
          {/* Cart */}
          <div className={styles.cartButton}>
            <Link to="/cart"> {/* Navigate to Cart Page */}
              🛒
              <span className={styles.cartCount}>
                {Array.isArray(cartItems) ? cartItems.length : 0}
              </span>
            </Link>
          </div>

          {/* Auth Buttons */}
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signupBtn}>Sign Up</button>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
