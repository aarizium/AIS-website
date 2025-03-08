import React from "react";

const SidebarButton = ({ toggleSidebar }) => {
  return (
    <button className="menu-btn" onClick={toggleSidebar}>
      ☰ 
    </button>
  );
};

export default SidebarButton;
