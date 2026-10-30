import Navbar from "@/components/Navbar";
import { Outlet, ScrollRestoration } from "react-router";

function Dashboard() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
    </>
  );
}
export default Dashboard;
