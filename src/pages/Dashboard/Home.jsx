import Navbar from "../../components/layouts/Navbar";
import Sidebar from "../../components/layouts/Sidebar";
import "./../../styles/pages/Dashboard/home.css";

const Home = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h1>Bienvenido a PortCheck</h1>
      </div>
    </div>
  );
};

export default Home;
