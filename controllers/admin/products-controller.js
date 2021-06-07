const repository = require("../../repositories/products");
const imageHelper = require("../../helper/image");

const productsController = {
  list: async (req, res, next) => {
    try {
      let products = await repository.list(req, res);
      if (typeof req.session.admin == "undefined" && !req.session.admin)
      res.redirect("/admin/login");
      res.render("admin/products/allproducts.ejs", {
        userName: req.session.user || null,
        products: products.data,
        layout: "layouts/admin-default",
        imageHelper
      });
    } catch (err) {
      return res.status(400).send({ error: "Error finding products!" });
    }
  },
  product: async (req, res, next) => {
    const { id } = req.params;
    try {
      let product = await repository.product(req);
      res.render("products/product-details.ejs", { product });
    } catch (err){
      return res.status(400).send({ error: "Error finding product!" });
    }
  },
  registerRender: async (req, res, next) => {
    try {
      if (typeof req.session.admin == "undefined" && !req.session.admin)
      res.redirect("/admin/login");
      res.render("admin/products/register.ejs", {
        userName: req.session.user || null,
        layout: "layouts/admin-default",
      });
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: err.message });
    }
  },
  register: async (req, res, next) => {
    const data = req.body;

    req.body = {
      name: data["product-name"],
      description: data["product-description"],
      category: data["product-category"],
      quantity: data["product-quantity"],
      price: data["product-price"],
    };

    if (data["product-image"].length > 0)
    req.body ={
      image: data["product-image"],
      ...req.body
    }
    try {
      let register = await repository.register(req);
      if (register.error) throw new Error(register.error);
      res.status(201).send(register.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  update: async (req, res, next) => {
    const data = req.body;
    const { id } = req.params;
    try {
      let update = await repository.update(id, data);
      return res.status(200).send(update.data);
    } catch (err) {
      return res.status(400).send({ error: "Updating product failed" });
    }
  },
  remove: async (req, res, next) => {
    const { id } = req.params;
    try {
      let remove = await repository.remove(id);

      return res.status(200).send(true);
    } catch (err) {
      return res.status(400).send({ error: "Delete product failed" });
    }
  },
};

module.exports = productsController;
