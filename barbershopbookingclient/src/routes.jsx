import { createBrowserRouter } from "react-router";
import MainPage from "@/pages/MainPage";
import BookAppointmentPage from "@/pages/bookAppointment/BookAppointmentPage";
import Dashboard from "@/Dashboard";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
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
    ],
  },
]);
export default router;
