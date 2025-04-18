import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./ProductDetails.module.css";

const allProducts = [
  {
    id: 1,
    name: "Circular Connector A",
    price: "$15.99",
    category: "industrial-circular-component",
    image: "/pictures/industrial-circular-components.jpeg",
    description: "High-quality circular connector with 12 contacts for industrial use.",
  },
  {
    id: 2,
    name: "PCB Connector B",
    price: "$18.50",
    category: "passive-component",
    image: "/pictures/passive-components.jpeg",
    description: "Reliable PCB connector for various electronic applications.",
  },
  {
    id: 3,
    name: "RF Connector C",
    price: "$22.00",
    category: "mechanical-fluid-power",
    image: "/pictures/mechanical-and-fluid-power.jpeg",
    description: "Durable RF connector for signal transmission.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleAddToCart = () => {
    alert(`Added "${product.name}" to cart!`);
    // Ideally, you'd call context/store function here
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout for "${product.name}"`);
    // You can redirect to checkout page here
  };

  return (
    <div>
      <Navbar />
      <div className={styles.productContainer}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <div className={styles.productInfo}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>{product.price}</h3>

          <div className={styles.buttonGroup}>
            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className={styles.buyNowBtn} onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
