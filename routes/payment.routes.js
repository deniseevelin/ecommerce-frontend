const controller = require("../controllers/payment-controller");

module.exports = (app) => {
  app.get("/checkout", controller.checkout);

  app.get("/billet", controller.billet);

  app.get("/card", controller.card);
};
