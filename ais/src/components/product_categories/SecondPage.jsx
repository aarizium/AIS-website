import React from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import styles from "./SecondPage.module.css";

const SecondPage = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ProductList />
    </div>
  );
};

export default SecondPage;
