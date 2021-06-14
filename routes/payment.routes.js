const controller = require("../controllers/payment-controller");

module.exports = (app) => {
  app.get("/checkout", controller.checkout);
};
