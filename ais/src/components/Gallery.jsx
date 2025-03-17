import styles from "./Gallery.module.css";
const Gallery = () => {
  return (
    <div className={styles.container}>
      <img
        src="pictures/Firefly -A professional industrial setting where a group of engineers and technicians are engaged in (3) (1).jpg"
        alt=""
        className={styles.image}
      />
      <img
        src="pictures/Firefly -A professional industrial setting where a group of engineers and technicians are engaged in (4).jpg"
        className={styles.image}
        alt=""
      />
      <img
        src="pictures/Firefly A futuristic industrial workspace featuring a sleek metallic workstation displaying advanced (3) (1).jpg"
        className={styles.image}
        alt=""
      />
    </div>
  );
};
export default Gallery;
