import Navbar from "@/components/Navbar";
import { Outlet, ScrollRestoration } from "react-router";
import styles from "@/assets/styles/Dashboard.module.css";
import Footer from "@/components/Footer";

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Dashboard;
