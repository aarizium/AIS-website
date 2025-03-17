import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "industrial-circular-component", image: "pictures/industrial-circular-components.jpeg", title: "Industrial Circular Component" },
    { name: "passive-component", image: "pictures/passive-components.jpeg", title: "Passive Component" },
    { name: "mechanical-fluid-power", image: "pictures/mechanical-and-fluid-power.jpeg", title: "Mechanical and Fluid Power" },
    { name: "ppe", image: "pictures/ppe.jpeg", title: "Personal Protective Equipment" },
    { name: "test-measurement", image: "pictures/test-and-measurement.jpeg", title: "Test & Measurement" },
    { name: "hand-tools", image: "pictures/hand-tools.jpeg", title: "Hand Tools" },
    { name: "cables-wires", image: "pictures/cables-and-wires.jpeg", title: "Cables & Wires" },
    { name: "power-supplies-transformers", image: "pictures/power-supplies-and-transformers.jpeg", title: "Power Supplies And Transformers" }
  ];

  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Categories</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {categories.map((category, index) => (
          <div key={index} className="col d-flex align-items-start">
            <div
              className="text-decoration-none text-dark w-100 d-block p-3 rounded hover:bg-light hover:text-primary"
              onClick={() => navigate(`/categories/${category.name}`)}
              style={{ cursor: "pointer" }}
            >
              <div>
                <img src={category.image} alt={category.title} />
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">{category.title}</h3>
                <p>Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
