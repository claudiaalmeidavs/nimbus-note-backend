const database = require ("../../database.js");

const getAll = () => {
  return database.query("SELECT * FROM projects ORDER BY deadline ASC").then(([results]) => results);
};

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
      "INSERT INTO projects SET ?", [project]
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
    update,
    getById, 
    createProject, 
    del
};
