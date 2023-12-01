const Activity = require("../models/activity.model");

const getAllActivities = (req, res) => {
  Activity.getAll()
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send("No activities found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const updateActivity = (req, res) => {
  const { id } = req.params;
  const { activity_status } = req.body;
  Activity.updateStatus(id, activity_status)
  .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).send("Activity not found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating activity");
    });
};

const getActivityById = (req, res) => {
  const { id } = req.params;
  Activity.getById(id)
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send("No activities found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
}

const postNewActivity = (req, res) => {
  Activity.createActivity(req.body)
  .then((result) => {
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(404).send("Activity not found.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error creating new entry");
    });
};

const deleteActivity = (req, res) => {
  const { id } = req.params;
  Activity.del(id)
  .then((result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("Activity not found.");
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error deleting Activity");
  });
}

module.exports = {
  getAllActivities,
  updateActivity,
  getActivityById,
  postNewActivity,
  deleteActivity
};
