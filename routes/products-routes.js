const controller = require("../controllers/products-controller");

module.exports = (app) => {

  app.get("/products", controller.renderAllProducts);

  app.get("/product/:id", controller.renderProductsById);

  app.patch("/products/:id", controller.renderUpdateProduct);

  app.delete("/products/:id", controller.renderRemoveProduct);
  
  app.post("/products", controller.renderRegisterProduct);
};
