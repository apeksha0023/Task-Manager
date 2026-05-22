import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  return (
    <div>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Admin Dashboard</h1>

          <div className="card">
            <h2>Welcome Admin</h2>

            <p>
              Admin Panel Working
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;