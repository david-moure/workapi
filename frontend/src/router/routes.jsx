import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/DashBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
