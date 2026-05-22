import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/tasks">
        Tasks
      </Link>

      <Link to="/admin">
        Admin
      </Link>

      <Link to="/users">
        Users
      </Link>

      <Link to="/logs">
        Logs
      </Link>
    </div>
  );
}

export default Sidebar;