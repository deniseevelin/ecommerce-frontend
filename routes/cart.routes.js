const controller = require("../controllers/cart-controller");

module.exports = (app) => {
    app.get("/cart", controller.show);
    app.post("/cart", controller.insert);
    app.delete("/cart", controller.remove);
}
  