const repository = require("../repositories/products");
const imageHelper = require("../helper/image");

const productsController = {
  list: async (req, res, next) => {
    try {
      let products = await repository.list();
      if (typeof req.session.token == "undefined" || !req.session.token) {
        res.render("products/allproducts.ejs", {
          id: req.session.id,
          userName: req.session.user || null,
          products: products.data,
          layout: "layouts/default.ejs",
          imageHelper,
        });
      } else {
        res.render("products/allproducts.ejs", {
          id: req.session.id,
          userName: req.session.user || null,
          products: products.data,
          layout: "layouts/users-default.ejs",
          imageHelper,
        });
      }
    } catch (err) {
      return res.status(400).send({ error: "Error finding products!" });
    }
  },
  show: async (req, res, next) => {
    const { id } = req.params;
    try {
      let product = await repository.product(req);
      if (typeof req.session.token == "undefined" || !req.session.token) {
        res.render("products/product-details.ejs", {
          id: req.session.id,
          userName: req.session.user || null,
          product: product.data,
          layout: "layouts/default.ejs",
          imageHelper,
        });
      } else {
        res.render("products/product-details.ejs", {
          id: req.session.id,
          userName: req.session.user || null,
          product: product.data,
          layout: "layouts/users-default.ejs",
          imageHelper,
        });
      }
    } catch (err) {
      return res.status(400).send({ error: "Error finding product!" });
    }
  },
};

module.exports = productsController;
