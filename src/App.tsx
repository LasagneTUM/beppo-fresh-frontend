import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/login-page/login-page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <>TODO</>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
