import { createBrowserRouter } from "react-router";
import MainPage from "@/pages/MainPage";
import BookAppointment from "@/pages/bookAppointment/BookAppointment";
import Dashboard from "@/Dashboard";

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
        element: <BookAppointment />,
      },
    ],
  },
]);
export default router;
