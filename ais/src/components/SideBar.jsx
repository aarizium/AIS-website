import "./Sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">Account</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
