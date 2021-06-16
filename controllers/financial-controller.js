const api = require("../core/api");
const repository = require("../repositories/user");

const financialControllers = {
  createCharge: async (req, res, next) => {
    try {
      const createCharge = await api("POST", "/charges", req.session.token, req.body);
      return res.send(createCharge.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  cancelCharge: async (req, res, next) => {
    try {
      const id = req.params.id;
      const cancelCharge = await api("PUT", `/charges/${id}/cancelation`, req.session.token);
      return res.send(cancelCharge.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  tokenCreditCard: async (req, res, next) => {
    console.log(req.body);
    try {
      const token = await api(
        "POST",
        "/credit-cards/tokenization",
        req.session.token,
        req.body
      );
      res.send(token.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  paymentCharge: async (req, res, next) => {
    req.params.id = req.session.id
    let user = await repository.user(req);
    let card = await repository.card(req);
      const charges = user.data.charge;
      for (charge of charges) {
        chargeId = charge.id;
      }  
    req.body = {
      chargeId: chargeId,
      billing: {
        email: user.data.email,
        address: {
          postCode: user.data.address.postCode,
          street: user.data.address.street,
          number: user.data.address.number,
          complement: user.data.address.complement,
          neighborhood: user.data.address.neighborhood,
          city: user.data.address.city,
          state: user.data.address.state,
        },
      },
      creditCardDetails: {
        creditCardId: card.data.token,
      },
    };
    try {
      const payment = await api("POST", "/payments", req.session.token, req.body);
      res.send(payment.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  refundsPayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const refund = await api("POST", `/payments/${id}/refunds`, req.session.token, req.body);
      res.send(refund.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  capturePayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const capture = await api("POST", `/payments/${id}/capture`, req.session.token, req.body);
      res.send(capture.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
};

module.exports = financialControllers;
