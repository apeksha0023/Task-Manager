const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/roleMiddleware");

const {
  getAllUsers,
  deleteUser,
  updateUserStatus,
  getAllTasks,
  adminDeleteTask,
} = require("../controllers/adminController");

router.get(
  "/users",
  protect,
  adminOnly,
  getAllUsers
);

router.delete(
  "/users/:id",
  protect,
  adminOnly,
  deleteUser
);

router.put(
  "/users/:id/status",
  protect,
  adminOnly,
  updateUserStatus
);

router.get(
  "/tasks",
  protect,
  adminOnly,
  getAllTasks
);

router.delete(
  "/tasks/:id",
  protect,
  adminOnly,
  adminDeleteTask
);

module.exports = router;