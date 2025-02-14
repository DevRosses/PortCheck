import Navbar from "../../components/layouts/Navbar";
import Sidebar from "../../components/layouts/Sidebar";
import "./../../styles/pages/Dashboard/containers.css";

const Containers = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h2>Gestión de Contenedores</h2>
      </div>
    </div>
  );
};

export default Containers;
