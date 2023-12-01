const projectRouter = require("./projects.routes");

const setupRoutes = (server) =>{
    server.use("/projects", projectRouter)
}

module.exports = setupRoutes