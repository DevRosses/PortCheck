import Navbar from "../../components/layouts/Navbar";
import Sidebar from "../../components/layouts/Sidebar";
import "./../../styles/pages/Dashboard/seals.css";

const Seals = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h2>Gestión de Precintos</h2>
      </div>
    </div>
  );
};

export default Seals;
