import { useAuth } from "../../hooks/useAuth";
import { Typography } from "@mui/material";
import PageContainer from "../../components/ui/PageContainer";
import Navbar from "../../components/layouts/Navbar";
import Sidebar from "../../components/layouts/Sidebar";
import HeaderDesktop from "../../components/layouts/HeaderDesktop";
import HeaderMobile from "../../components/layouts/HeaderMobile";
import "../../styles/pages/Dashboard/dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <HeaderDesktop />
        <HeaderMobile toggleSidebar={toggleSidebar} />
        <Navbar />
        <PageContainer>
          <Typography variant="h4">Bienvenido, {user?.username}</Typography>
        </PageContainer>
      </div>
    </div>
  );
};

export default Dashboard;
