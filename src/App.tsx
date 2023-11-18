import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InteractiveList from "./components/interactive-list/interactive-list";
import LoginPage from "./components/login-page/login-page";
import Root from "./components/root/root";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Root />,
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
