import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const categories = ["Industrial Circular", "PCB Connectors", "RF Connectors", "Data Connectors"];

  return (
    <div className={styles.sidebar}>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className={styles.categoryItem}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
