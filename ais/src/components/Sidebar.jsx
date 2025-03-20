import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeBtn} onClick={toggleSidebar}>
        ✖
      </button>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Industries</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
