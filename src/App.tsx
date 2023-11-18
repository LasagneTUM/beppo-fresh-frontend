import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InteractiveList from "./components/interactive-list/interactive-list";
import Layout from "./components/layout/layout";
import LoginPage from "./components/login-page/login-page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <InteractiveList />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
