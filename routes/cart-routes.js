const controller = require("../controllers/cart-controller");

module.exports = (app) => {
  app.get("/cart/:cartid", controller.getCartById);

  app.post("/cart/:userid", controller.createCart);

  app.put("/cart/:cartid", controller.updateCart);
};
