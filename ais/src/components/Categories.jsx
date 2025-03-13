const Categories = () => {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Categories</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div className="col d-flex align-items-start">
          <a
            href="/categories/industrial-circular-component"
            className="text-decoration-none text-dark w-100 d-block p-3 rounded hover:bg-light hover:text-primary"
          >
            <div>
              <img src="pictures/industrial-circular-components.jpeg" alt="" />
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Industrial Circular Component
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </a>
        </div>

        <div className="col d-flex align-items-start">
          <a
            href="/categories/passive-component"
            className="text-decoration-none text-dark w-100 d-block p-3 rounded hover:bg-light hover:text-primary"
          >
            <div>
              <img src="pictures/passive-components.jpeg" alt="" />
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Passive Component
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </a>
        </div>

        <div className="col d-flex align-items-start">
          <a
            href="/categories/mechanical-fluid-power"
            className="text-decoration-none text-dark w-100 d-block p-3 rounded hover:bg-light hover:text-primary"
          >
            <div>
              <img src="pictures/mechanical-and-fluid-power.jpeg" alt="" />
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Mechanical and Fluid Power
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </a>
        </div>

        <div className="col d-flex align-items-start">
          <a
            href="/categories/ppe"
            className="text-decoration-none text-dark w-100 d-block p-3 rounded hover:bg-light hover:text-primary"
          >
            <div>
              <img src="pictures/ppe.jpeg" alt="" />
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Personal Protective Equipment
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </a>
        </div>

        <div className="col d-flex align-items-start">
          <a
            href="/categories/test-measurement"
            className="text-decoration-none text-dark w-100 d-block p-3 rounded hover:bg-light hover:text-primary"
          >
            <div>
              <img src="pictures/test-and-measurement.jpeg" alt="" />
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Test & Measurement
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </a>
        </div>

        <div className="col d-flex align-items-start">
          <a
            href="/categories/hand-tools"
            className="text-decoration-none text-dark w-100 d-block p-3 rounded hover:bg-light hover:text-primary"
          >
            <div>
              <img src="pictures/hand-tools.jpeg" alt="" />
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Hand Tools
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </a>
        </div>

        <div className="col d-flex align-items-start">
          <a
            href="/categories/cables-wires"
            className="text-decoration-none text-dark w-100 d-block p-3 rounded hover:bg-light hover:text-primary"
          >
            <div>
              <img src="pictures/cables-and-wires.jpeg" alt="" />
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Cables & Wires
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </a>
        </div>

        <div className="col d-flex align-items-start">
          <a
            href="/categories/power-supplies-transformers"
            className="text-decoration-none text-dark w-100 d-block p-3 rounded hover:bg-light hover:text-primary"
          >
            <div>
              <img src="pictures/power-supplies-and-transformers.jpeg" alt="" />
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Power Supplies And Transformers
              </h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
