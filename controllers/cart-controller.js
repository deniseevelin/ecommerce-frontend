const repository = require("../repositories/products");
const helper = require("../helper/cart");
const imageHelper = require("../helper/image");

const cart = {
  show: async (req, res, next) => {
    const products = await helper.list(req);
    res.render("index/cart.ejs", {
      id: req.session.id || null,
      userName: req.session.user || null,
      layout: "layouts/users-default.ejs",
      products,
      imageHelper,
    });
  },
  insert: async (req, res, next) => {
    const { id } = req.body;

    req.params = { id };
    try {
      const product = await repository.product(req);
      const products = await helper.insert(req, product.data);
      res.json(products);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  remove: async (req, res, next) => {
    const { id } = req.body;

    req.params = {id}
    try {
      const product = await repository.product(req);
      const remove = await helper.remove(req, id);
      res.json(remove);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
};

module.exports = cart;
