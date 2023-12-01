const database = require ("../../database.js");

const getAll = () => {
  return database.query("SELECT * FROM projects").then(([results]) => results);
};

const updateStatus = (id, status) => {
    return database
    .query(
        "UPDATE projects SET status = ? WHERE id = ?",
        [status, id]
    )
    .then(([results]) => (results));
}

const update = (id, updatedProject) => {
    return database
    .query(
      "UPDATE projects SET ? WHERE id = ?", [updatedProject, id]
    )
    .then(([results]) => (results))
}

const getById = (id) => {
  return database
  .query("SELECT * FROM projects WHERE id = ?", [id])
  .then(([results]) => results);
}

const createProject = (project) => {
  return database
    .query(
      "INSERT INTO projects set ?", project
    )
    .then(([results]) => results);
};

const del = (id) => {
    return database
    .query ("DELETE FROM projects WHERE id = ?", id)
    .then(([results]) => (results))
}

module.exports = {
    getAll,
    updateStatus,
    update,
    getById, 
    createProject, 
    del
};
