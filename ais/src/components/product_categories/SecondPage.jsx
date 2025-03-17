import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import styles from "./SecondPage.module.css";

const SecondPage = () => {
  const { name } = useParams(); // Get category name from URL

  return (
    <div className={styles.container}>
      <Sidebar />
      <div>
        <h2>Products for {name.replace(/-/g, " ")}</h2>
        <ProductList category={name} />
      </div>
    </div>
  );
};

export default SecondPage;
