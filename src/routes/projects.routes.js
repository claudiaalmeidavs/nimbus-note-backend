const express = require("express");
const projectController = require("../controllers/project.controller");
const projectRouter = express.Router();

// Route to get all projects
projectRouter.get("/", projectController.getAllProjects);

// Route to edit project details
projectRouter.put("/:id", projectController.editProject)

// Route to get by id
projectRouter.get("/:id", projectController.getProjectById)

// Route to post new project
projectRouter.post("/", projectController.postNewProject)

// Route to delete project
projectRouter.delete("/:id", projectController.deleteProject)

module.exports = projectRouter;