import "./../../styles/components/layouts/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li className="mb-2">
            <Link
              to="/dashboard"
              className="hover:bg-gray-700 p-2 block rounded"
            >
             En Espera
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/dashboard"
              className="hover:bg-gray-700 p-2 block rounded"
            >
              Cancelados
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="hover:bg-gray-700 p-2 block rounded"
            >
              Cumplidos y Archivados
            </Link>
          </li>
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
