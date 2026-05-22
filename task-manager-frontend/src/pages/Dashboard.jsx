import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Dashboard</h1>

          <div className="card">
            <h2>
              Welcome to Task Manager
            </h2>

            <p>
              Login Successful
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;