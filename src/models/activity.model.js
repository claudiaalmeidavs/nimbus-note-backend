const database = require("../../database");

const getAll = () => {
  return database.query("SELECT * FROM activities").then(([results]) => results);
};

const updateStatus = (id, activity_status) => {
    return database
    .query(
        "UPDATE activities SET activity_status = ? WHERE id = ?",
        [activity_status, id]
    )
    .then(([results]) => (results));
}

const getById = (id) => {
  return database
  .query("SELECT * FROM activities WHERE id = ?", [id])
  .then(([results]) => results);
}

const createActivity = (activity) => {
  return database
    .query(
      "INSERT INTO activities set ?", activity
    )
    .then(([results]) => results);
};

const del = (id) => {
    return database
    .query ("DELETE FROM activities WHERE id = ?", id)
    .then(([results]) => (results))
}

module.exports = {
    getAll,
    updateStatus,
    getById, 
    createActivity, 
    del
};
