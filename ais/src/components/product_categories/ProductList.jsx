import React from "react";
import styles from "./ProductList.module.css";

const products = [
  { id: 1, name: "Circular Connector A", price: "$15.99" },
  { id: 2, name: "Circular Connector B", price: "$18.50" },
  { id: 3, name: "Circular Connector C", price: "$22.00" },
  { id: 4, name: "Circular Connector A", price: "$15.99" },
  { id: 5, name: "Circular Connector B", price: "$18.50" },
  { id: 6, name: "Circular Connector C", price: "$22.00" },
];

const ProductList = () => {
  return (
    <div className={styles.productList}>
      <h2>Products</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
