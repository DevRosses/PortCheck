import Navbar from "../../components/layouts/Navbar";
import Sidebar from "../../components/layouts/Sidebar";
import "./../../styles/pages/Dashboard/ships.css";

const Ships = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h2>Gestión de Barcos</h2>
      </div>
    </div>
  );
};

export default Ships;
