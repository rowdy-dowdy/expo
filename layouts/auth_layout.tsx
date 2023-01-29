import { useOutlet } from "react-router";
import { AuthProvider } from "../components/auth_provider";

export const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <AuthProvider>{outlet}</AuthProvider>
  );
};