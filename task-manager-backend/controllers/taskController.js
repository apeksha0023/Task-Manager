const Task = require("../models/Task");
const ActivityLog = require("../models/ActivityLog");

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      createdBy: req.user._id,
    });

    await ActivityLog.create({
      user: req.user._id,
      action: "CREATE_TASK",
      details: `Created task: ${title}`,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      createdBy: req.user._id,
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (task.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Access Denied",
      });
    }

    task.title = req.body.title || task.title;
    task.description =
      req.body.description || task.description;

    await task.save();

    await ActivityLog.create({
      user: req.user._id,
      action: "UPDATE_TASK",
      details: `Updated task: ${task.title}`,
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (task.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Access Denied",
      });
    }

    await task.deleteOne();

    await ActivityLog.create({
      user: req.user._id,
      action: "DELETE_TASK",
      details: `Deleted task: ${task.title}`,
    });

    res.json({
      message: "Task Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};