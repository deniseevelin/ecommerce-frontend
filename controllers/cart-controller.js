const api = require("../core/api");

const cartController = {
  getCartById: async (req, res, next) => {
    try {
        const {cartid} = req.params;
        const cart = await api(req, "get", `/cart/${cartid}`);
        return res.send(cart);
      } catch (err) {
        return res.status(400).send({ error: "Error find cart!" });
      }
  },
  createCart: async (req, res, next) => {
    const data = req.body;
    const {userid} = req.params;
    try {
      const createCart = await api(req, "post", `/cart/${userid}`, data);
      if (createCart.error) throw new Error(createCart.error);
      res.status(201).send(createCart);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: err.message });
    }
  },
  updateCart: async (req, res, next) => {
    const data = req.body.products;
    const { userid, cartid } = req.params;

    try {
        const upCart = await api(req, "put", `/cart/${userid}/${cartid}`, data);
        if (upCart.error) throw new Error(upCart.error);
        res.status(201).send(upCart);
      } catch (err) {
        console.log(err);
        return res.status(400).send({ error: err.message });
      }
  },
};

module.exports = cartController;
