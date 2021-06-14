const controller = require("../../controllers/admin/financial-controller");

module.exports = (app) => {
  app.put("/charges/:id/split", controller.updateSplit);
  app.get("/charges/:id", controller.consultCharge);
  app.get("/charges", controller.getCharges);

  app.get("/balance", controller.getBalance);
};
