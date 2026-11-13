import { createBrowserRouter } from "react-router";
import MainPage from "@/pages/MainPage";
import BookAppointmentPage from "@/pages/bookAppointment/BookAppointmentPage";
import DashboardClient from "@/DashboardClient";
import LoginPage from "./pages/LoginPage";
import AppointmentManagement from "@/components/appointments/AppointmentManagement";
import EditAppointment from "@/components/appointments/EditAppointment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardClient />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/book-appointment",
        element: <BookAppointmentPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/logout",
        element: <LoginPage />,
      },
      {
        path: "/appointments",
        element: <AppointmentManagement />,
      },
      {
        path: "/edit-appointment/:bookingId",
        element: <EditAppointment />,
      },
    ],
  },
]);
export default router;
