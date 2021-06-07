const controller = require("../../controllers/admin/products-controller");

module.exports = (app) => {
  app.get("/admin/products/add", controller.registerRender);
  app.get("/admin/products/:id", controller.product); 
  app.post("/admin/products", controller.register);
  app.get("/admin/products", controller.list);
  app.delete("/admin/products", controller.remove);
};
