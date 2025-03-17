import React from "react";
import styles from "./ProductList.module.css";

const allProducts = [
  {
    id: 1,
    name: "Circular Connector A",
    price: "$15.99",
    category: "industrial-circular-component",
    image: "/pictures/industrial-circular-components.jpeg" // ✅ Add image path
  },
  {
    id: 2,
    name: "PCB Connector B",
    price: "$18.50",
    category: "passive-component",
    image: "/pictures/industrial-circular-components.jpeg"
  },
  {
    id: 3,
    name: "RF Connector C",
    price: "$22.00",
    category: "mechanical-fluid-power",
    image: "/pictures/industrial-circular-components.jpeg"
  },{
    id: 4,
    name: "Circular Connector A",
    price: "$15.99",
    category: "industrial-circular-component",
    image: "/pictures/industrial-circular-components.jpeg" 
  },
];


const ProductList = ({ category }) => {
  const filteredProducts = allProducts.filter((product) => product.category === category);

  return (
    <div className={styles.productList}>
      <h2>Products</h2>
      <div className={styles.products}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.name} className={styles.productImage} /> {/* ✅ Add Image */}
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
