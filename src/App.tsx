import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InteractiveList from "./components/interactive-list/interactive-list";
import LoginPage from "./components/login-page/login-page";
import Root from "./components/root/root";
import { RecipePage } from "./components/recipe-page/recipe-page";

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
      {
        path: "/recipe/:id",
        element: <RecipePage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
