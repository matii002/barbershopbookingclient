import NavbarClient from "@/components/NavbarClient";
import { Outlet, ScrollRestoration } from "react-router";
import styles from "@/assets/styles/Dashboard.module.css";
import Footer from "@/components/Footer";
import NavbarEmployee from "@/components/NavbarEmployee";

function DashboardClient() {
  return (
    <div className={styles.dashboardContainer}>
      <ScrollRestoration />
      {/* <NavbarClient /> */}
      <NavbarEmployee />
      <Outlet />
      <Footer />
    </div>
  );
}
export default DashboardClient;
