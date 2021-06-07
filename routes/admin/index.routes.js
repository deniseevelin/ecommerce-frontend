const controllerIndex = require("../../controllers/admin/index-controller");

module.exports = (app) => {
  app.get("/admin", controllerIndex.dashboard);
};
