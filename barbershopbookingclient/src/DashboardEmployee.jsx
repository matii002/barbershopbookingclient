import NavbarEmployee from "@/components/NavbarEmployee";
import { Outlet, ScrollRestoration } from "react-router";
import styles from "@/assets/styles/Dashboard.module.css";
import Footer from "@/components/Footer";

function DashboardEmployee() {
  return (
    <div className={styles.dashboardContainer}>
      <ScrollRestoration />
      <NavbarEmployee />
      <Outlet />
      <Footer />
    </div>
  );
}
export default DashboardEmployee;
