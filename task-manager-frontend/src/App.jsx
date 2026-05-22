import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";

import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import ActivityLogs from "./pages/ActivityLogs";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <Routes>
      {/* Register Page */}
      <Route
        path="/"
        element={<Register />}
      />

      {/* Login Page */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* User Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <Tasks />
          </ProtectedRoute>
        }
      />

      {/* Admin Protected Routes */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/users"
        element={
          <AdminRoute>
            <Users />
          </AdminRoute>
        }
      />

      <Route
        path="/logs"
        element={
          <AdminRoute>
            <ActivityLogs />
          </AdminRoute>
        }
      />

      {/* Invalid Route Redirect */}
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;