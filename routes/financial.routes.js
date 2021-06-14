const controller = require("../controllers/financial-controller");

module.exports = (app) => {
  app.put("/charges/:id/cancelation", controller.cancelCharge);
  app.post("/charges", controller.createCharge);

  app.post("/credit-cards/tokenization", controller.tokenCreditCard);
  
  app.post("/payments/:id/refunds", controller.refundsPayment);
  app.post("/payments/:id/capture", controller.capturePayment);
  app.post("/payments", controller.paymentCharge);
};
