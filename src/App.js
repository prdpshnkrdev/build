import { RouterProvider } from "react-router-dom";
import router from "./router";
import Dashboard from "./dashboard";

function App() {
  return (
    <RouterProvider router={router}>
      <Dashboard />
    </RouterProvider>
  );
}

export default App;
