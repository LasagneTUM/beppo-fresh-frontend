import { Navigate } from "react-router";
import Layout from "../layout/layout";
import { useUser } from "../../hooks/use-user";

export default function Root() {
  const [user] = useUser();
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return <Layout />;
}
