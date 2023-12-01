const express = require("express");
const projectController = require("../controllers/activity.controller");
const projectRouter = express.Router();

// Route to get all projects
projectRouter.get("/", activityController.getAllProjects);

// Route to change status
projectRouter.put("/:id", activityController.updateActivity)

// Route to get by id
activityRouter.get("/:id", activityController.getActivityById)

// Route to post new activity
activityRouter.post("/", activityController.postNewActivity)

// Route to delete activity
activityRouter.delete("/:id", activityController.deleteActivity)

module.exports = activityRouter;