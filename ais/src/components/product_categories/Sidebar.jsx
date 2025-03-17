import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const categories = ["Industrial Circular",
     "Passive Components", 
     "Mechanical and fluid power", 
     "personal protective equipments",
     "Test and Measurement",
     "Hand Tools",
     "Cables and wire",
     "Power supplies and transformer",
    ];

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
