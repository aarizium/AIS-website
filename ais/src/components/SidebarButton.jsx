import React from "react";
import styles from "./Navbar.module.css";

const SidebarButton = ({ toggleSidebar }) => {
  return (
    <button className={styles.menuBtn} onClick={toggleSidebar}>
      ☰ 
    </button>
  );
};

export default SidebarButton;
