const controller = require("../controllers/financial-controller");

module.exports = (app) => {
  app.get("/data/banks", controller.getBanksInformation);

  app.get("/data/company-types", controller.getCompanyTypes);

  app.get("/data/business-areas", controller.getBusinessAreas);

  app.get("/digital-accounts", controller.getAccount);

  app.get("/balance", controller.getBalance);

  app.get("/documents", controller.getRequireDocuments);

  app.get("/documents/:id", controller.getStatusDocuments);

  app.post("/digital-accounts", controller.createAccount);

  app.post("/documents/:id/files", controller.sendDocuments);

  app.patch("/digital-accounts", controller.updateAccount);

  app.get("/charges", controller.getCharges);

  app.get("/charges/:id", controller.consultCharge);

  app.post("/charges", controller.createCharge);

  app.put("/charges/:id/cancelation", controller.cancelCharge);

  app.put("/charges/:id/split", controller.updateSplit);

  app.post("/credit-cards/tokenization", controller.tokenCreditCard);

  app.post("/payments", controller.paymentCharge);

  app.post("/payments/:id/refunds", controller.refundsPayment);

  app.post("/payments/:id/capture", controller.capturePayment);
};