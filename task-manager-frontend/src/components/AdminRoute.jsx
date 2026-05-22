import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const token = localStorage.getItem("token");

  // If token not found redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Allow access
  return children;
}

export default AdminRoute;