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

      res.render("financial/payments.ejs", {
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
  card: async (req, res, next) => {
    req.params.id = req.session.id
    try {
      let user = await repository.user(req);
      let card = await repository.card(req);
      const charges = user.data.charge;
      for (charge of charges) {
        chargeId = charge.id;
      }     
      res.render("financial/card.ejs", {
        card: card,
        idCharge: chargeId,
        id: user.data._id,
        userName: user.data.name,
        user: user.data,
        layout: "layouts/users-default.ejs",
      });
  } catch(err) {
    return res.status(400).send({ error: err.message });
  }
  },
  billet: async (req, res, next) => {
    req.params.id = req.session.id
    try {
      let user = await repository.user(req);
      const charges = user.data.charge;
      for (charge of charges) {
        linkBillet = charge.link;
      }
      res.render("financial/billet.ejs", {
        link: linkBillet,
        id: user.data._id,
        userName: user.data.name,
        user: user.data,
        layout: "layouts/users-default.ejs",
      });
  } catch(err) {
    return res.status(400).send({ error: err.message });
  }
}
};

module.exports = paymentController;
