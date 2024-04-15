import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard";
import Header from "./header";
import ErrorPage from "./error-page";
import Google from "./google";
import Grid from "@mui/material/Grid";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Grid container flexDirection={"column"} spacing={2}>
          <Grid item xs={1}>
            <Header />
          </Grid>
          <Grid item xs={11}>
            <Dashboard />
          </Grid>
        </Grid>
      </>
    ),
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
