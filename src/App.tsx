import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <>TODO Login Component</>,
  },
  {
    path: "/",
    element: <>TODO</>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
