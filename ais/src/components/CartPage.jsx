import React from "react";
import { useCart } from "./context/CartContext";
import styles from "./CartPage.module.css"; // Add styling

const CartPage = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className={styles.cartPage}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start shopping!</p>
      ) : (
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
              <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className={styles.total}>
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
      <div className={styles.checkout}>
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
