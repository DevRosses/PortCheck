import "./../../styles/components/layouts/sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Dashboard</li>
          <li>Contenedores</li>
          <li>Barcos</li>
          <li>Precintos</li>
        </ul>
      </aside>
      <div
        className={`overlay ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Sidebar;
