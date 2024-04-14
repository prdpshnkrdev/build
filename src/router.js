import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard";
import Header from "./header";
import ErrorPage from "./error-page";
import Google from "./google";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/google",
        element: <Google />,
      },
    ],
  },
]);

export default router;
