import { useAuth } from "../../hooks/useAuth";
import { Typography } from "@mui/material";
import PageContainer from "../../components/ui/PageContainer";
import Sidebar from "../../components/layouts/Sidebar";
import Header from "../../components/layouts/Header";
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
      <Header toggleSidebar={toggleSidebar} />
      <div className="dashboard-content">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="main-content">
          <PageContainer>
            <Typography variant="h4">Bienvenido, {user?.username}</Typography>
          </PageContainer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;