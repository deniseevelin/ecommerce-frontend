const controller = require("../controllers/contact-controller");

module.exports = (app) => {

  app.get("/contact", controller.contacts);
}
