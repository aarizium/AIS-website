import React from "react";
import "./HomeProduct.css";
import product1 from "../assets/Random_Images/Product1.png";


const products = [
  { id: 1, image: product1, name: "Product 1", price: 100, discount: 20 },
  { id: 2, image: product1, name: "Product 1", price: 150, discount: 15 },
  { id: 3, image: product1, name: "Product 1", price: 200, discount: 10 },
];

const HomeProduct = () => {
  return (
    <div className="product-list">
      {products.map(({ id, image, name, price, discount }) => {
        const discountedPrice = (price - (price * discount) / 100).toFixed(2);

        return (
          <div key={id} className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-price">
              <span className="original-price">${price}</span>
              <span className="discounted-price">${discountedPrice}</span>
            </p>
            <p className="product-discount">{discount}% OFF</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomeProduct;
