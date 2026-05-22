function TaskCard({ task }) {
  return (
    <div className="card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <span>
        Status: {task.status}
      </span>
    </div>
  );
}

export default TaskCard;