import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Tasks() {
  const [tasks, setTasks] =
    useState([]);

  useEffect(() => {
    setTasks([
      {
        _id: 1,
        title: "Learn React",
        description:
          "Complete frontend",
        status: "Pending",
      },

      {
        _id: 2,
        title: "Build API",
        description:
          "Complete backend",
        status: "Completed",
      },
    ]);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Tasks Page</h1>

          {tasks.map((task) => (
            <div
              className="card"
              key={task._id}
            >
              <h3>{task.title}</h3>

              <p>
                {task.description}
              </p>

              <span>
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;