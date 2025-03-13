import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={`py-5 ${styles.maincontainer}`}>
        <div class="row">
          <div className={`${styles.listcomp} col-6 col-md-2 mb-3`}>
            <h5>Helpful Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-white ${styles.footerlinks} `}
                >
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-white ${styles.footerlinks} `}
                >
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-white ${styles.footerlinks} `}
                >
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-white ${styles.footerlinks} `}
                >
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 text-white ${styles.footerlinks} `}
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Contact us</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white">
                  <img src="pictures/contacts.jpg" alt="" />
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  <img src="pictures/Email.jpg" alt="" />
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  <img src="pictures/address.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-5 offset-md-1 mb-3"></div>
        </div>

        <p>© Advanced Integrated Solutions</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-body-emphasis" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#twitter"></use>
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#instagram"></use>
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
