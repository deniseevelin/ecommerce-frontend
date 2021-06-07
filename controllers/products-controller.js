const repository = require("../repositories/products");

const productsController = {
  list: async (req, res, next) => {
    try {
      let products = await repository.list(req, res);

      res.render("products/allproducts.ejs", {products: products.data });
    } catch (err) {
      return res.status(400).send({ error: "Error finding products!" });
    }
  },
  byId: async (req, res, next) => {
    const { id } = req.params;
    try {
      let products = await repository.product(id);
      res.render("products/product-details.ejs", { products: products.data });
    } catch (err) {
      return res.status(400).send({ error: "Error finding product!" });
    }
  },
};

module.exports = productsController;
