import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const categories = [
    { name: "Industrial Circular Component", path: "industrial-circular-component" },
    { name: "Passive Component", path: "passive-component" },
    { name: "Mechanical and Fluid Power", path: "mechanical-fluid-power" },
    { name: "Personal Protective Equipment", path: "ppe" },
    { name: "Test & Measurement", path: "test-measurement" },
    { name: "Hand Tools", path: "hand-tools" },
    { name: "Cables & Wires", path: "cables-wires" },
    { name: "Power Supplies And Transformers", path: "power-supplies-transformers" }
  ];

  return (
    <div className={styles.sidebar}>
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button
              className={styles.categoryButton}
              onClick={() => navigate(`/categories/${category.path}`)} // ✅ Redirect on click
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
