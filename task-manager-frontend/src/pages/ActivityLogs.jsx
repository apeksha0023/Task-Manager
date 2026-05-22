import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function ActivityLogs() {
  return (
    <div>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Activity Logs</h1>

          <div className="card">
            <p>
              User Logged In
            </p>
          </div>

          <div className="card">
            <p>
              Task Created
            </p>
          </div>

          <div className="card">
            <p>
              Task Updated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityLogs;