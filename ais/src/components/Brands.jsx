import styles from "./Brands.module.css";
const Brands = () => {
  return (
    <>
      <div className={styles.Brandcontainer}>
        <img
          className={styles.Brandimages}
          src="/pictures/Brand1.png"
          alt="Brandpicture"
        />
        <img
          className={styles.Brandimages}
          src="/pictures/Brand2.png"
          alt="Brandpicture"
        />
        <img
          className={styles.Brandimages}
          src="/pictures/Brand3.png"
          alt="Brandpicture"
        />
        <img
          className={styles.Brandimages}
          src="/pictures/Brand4.png"
          alt="Brandpicture"
        />
        <img
          className={styles.Brandimages}
          src="/pictures/Brand5.png"
          alt="Brandpicture"
        />
        <img
          className={styles.Brandimages}
          src="/pictures/Brand6.png"
          alt="Brandpicture"
        />
        <img
          className={styles.Brandimages}
          src="/pictures/Brand7.png"
          alt="Brandpicture"
        />
        <img
          className={styles.Brandimages}
          src="/pictures/Brand8.png"
          alt="Brandpicture"
        />
        <img
          className={styles.Brandimages}
          src="/pictures/Brand9.png"
          alt="Brandpicture"
        />
        <img
          className={styles.Brandimages}
          src="/pictures/brand10.png"
          alt="Brandpicture"
        />
      </div>
      <div className={styles.buttoncontainer}>
        <button className={styles.button}>Explore Brands</button>
      </div>
    </>
  );
};
export default Brands;
