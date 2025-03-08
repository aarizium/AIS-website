import styles from "./Header.module.css";
import logo from "../assets/Pictures/LOGO.jpg"; // Corrected path

const Header = () => {
  return (
    <div className={styles.Header}>
      <img className={styles.logo} src={logo} alt="Company Logo" />
      <div className={styles.companyname}>Advanced Integrated Solutions</div>
    </div>
  );
};

export default Header;
