const Project = require("../models/project.model");

const getAllProjects = (req, res) => {
  Project.getAll()
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send("No projects found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const updateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  Project.updateStatus(id, status)
  .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).send("Project not found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating project");
    });
};

const editProject = (res, req) => {
  const { id } = req.params;
  const updatedProject = req.body;
  Project.update(id, updatedProject)
  .then((result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("Error updating project")
    }
  })
}

const getProjectById = (req, res) => {
  const { id } = req.params;
  Project.getById(id)
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send("No projects found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
}

const postNewProject = (req, res) => {
  Project.createProject(req.body)
  .then((result) => {
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).send("Project not found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error creating new entry");
    });
};

const deleteProject = (req, res) => {
  const { id } = req.params;
  Project.del(id)
  .then((result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("Project not found.");
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error deleting project");
  });
}

module.exports = {
  getAllProjects,
  updateStatus,
  editProject,
  getProjectById,
  postNewProject,
  deleteProject
};
