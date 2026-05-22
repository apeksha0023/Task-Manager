import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Users() {
  return (
    <div>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Users Page</h1>

          <div className="card">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Apeksha</td>
                  <td>
                    apeksha@gmail.com
                  </td>
                  <td>Admin</td>
                </tr>

                <tr>
                  <td>Rahul</td>
                  <td>
                    rahul@gmail.com
                  </td>
                  <td>User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;