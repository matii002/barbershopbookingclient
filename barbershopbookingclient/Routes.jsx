import { createBrowserRouter } from "react-router";
import MainPage from "./src/pages/MainPage";
import BookAppointment from "./src/pages/BookAppointment";
import Dashboard from "./src/Dashboard";

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
