import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={`p-3 text-bg-dark ${styles.navbar}`}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          {/* Navbar Links */}
          <ul className="nav me-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#"
                className={`nav-link px-2 text-white ${styles.navLink}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link px-2 text-white ${styles.navLink}`}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link px-2 text-white ${styles.navLink}`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link px-2 text-white ${styles.navLink}`}
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`nav-link px-2 text-white ${styles.navLink}`}
              >
                About us
              </a>
            </li>
          </ul>

          {/* Search Bar and Search Button */}
          <div
            className={`d-flex align-items-center ${styles.searchContainer}`}
          >
            <input
              type="search"
              className={`form-control form-control-dark text-bg-white ${styles.searchbar}`}
              placeholder="Search Products or Services"
              aria-label="Search"
            />
            <button className={`btn btn-outline-light ${styles.searchBtn}`}>
              Search
            </button>
          </div>

          {/* Login & Sign-up Buttons */}
          <div className={`d-flex ${styles.authButtons}`}>
            <button
              type="button"
              className={`btn btn-outline-light me-2 ${styles.loginBtn}`}
            >
              Login
            </button>
            <button
              type="button"
              className={`btn btn-warning ${styles.signupBtn}`}
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
