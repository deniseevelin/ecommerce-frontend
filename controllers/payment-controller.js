const repository = require("../repositories/user");
const imageHelper = require("../helper/image");
const helper = require("../helper/cart");

const paymentController = {
  checkout: async (req, res, next) => {
    const products = await helper.list(req);
    req.params.id = req.session.id;
    try {
      let user = await repository.user(req);
      if (typeof req.session.token == "undefined" || !req.session.token)
        res.render("user/login.ejs", {
          userName: null,
          layout: "layouts/default.ejs",
        });

      res.render("payments.ejs", {
        id: user.data._id,
        userName: user.data.name,
        user: user.data,
        layout: "layouts/users-default.ejs",
        products,
        imageHelper,
      });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
};

module.exports = paymentController;
