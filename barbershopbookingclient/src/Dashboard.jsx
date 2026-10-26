import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

function Dashboard() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default Dashboard;
