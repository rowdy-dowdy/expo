import { Text, View } from "react-native";
import { Navigate, Outlet, useNavigate } from "react-router-native";
import { useAuth } from "../components/auth_provider";

export default () => {
  const { user } = useAuth();

  // const user = {}

  if (!user) {
    return <Navigate to="auth/login" />
  }

  return (
    <Outlet />
  )
}