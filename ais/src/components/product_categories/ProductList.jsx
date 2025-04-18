import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductList.module.css";

const allProducts = [
  { id: 1, name: "Circular Connector A", price: "$15.99", category: "industrial-circular-component", image: "/pictures/industrial-circular-components.jpeg" },
  { id: 2, name: "PCB Connector B", price: "$18.50", category: "passive-component", image: "/pictures/passive-components.jpeg" },
  { id: 3, name: "RF Connector C", price: "$22.00", category: "mechanical-fluid-power", image: "/pictures/mechanical-and-fluid-power.jpeg" }
];

const ProductList = ({ category }) => {
  const navigate = useNavigate();
  const filteredProducts = allProducts.filter((product) => product.category === category);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    alert(`Added "${product.name}" to cart!`);
  };

  const handleBuyNow = (e, product) => {
    e.stopPropagation();
    alert(`Proceeding to checkout for "${product.name}"`);
  };

  return (
    <div className={styles.productList}>
      <h2>Products</h2>
      <div className={styles.products}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className={styles.productCard}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div className={styles.buttonGroup}>
                <button
                  className={styles.addToCartBtn}
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </button>
                <button
                  className={styles.buyNowBtn}
                  onClick={(e) => handleBuyNow(e, product)}
                >
                  Buy Now
                </button>
              </div>
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
