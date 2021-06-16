const repository = require("../repositories/user");

const usersController = {
  list: async (req, res, next) => {
    const users = await repository.list();
    return res.send(users.data);
  },
  user: async (req, res, next) => {
    const { id } = req.params;
    try {
      let user = await repository.user(req);
      res.render("user/profile.ejs", {
        id: user.data._id,
        userName: user.data.name,
        user: user.data,
        layout: "layouts/users-default.ejs",
      });
    } catch (err) {
      return res.status(400).send({ error: "Error finding user!" });
    }
  },
  charges: async (req, res, next) => {
    req.params.id = req.session.id;
    try {
      let user = await repository.user(req);
      const charges = user.data.charge;
      res.render("user/orders.ejs", {
        charges: charges,
        id: user.data._id,
        userName: user.data.name,
        layout: "layouts/users-default.ejs",
      });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  update: async (req, res, next) => {
    const data = req.body;

    req.body = {
      name: data["update-name"],
      document: data["update-document"],
      email: data["update-email"],
      birthDate: data["update-birthdate"],
      phone: data["update-phone"],
      address: {
        postCode: data["update-postcode"],
        street: data["update-street"],
        number: data["update-number"],
        complement: data["update-complement"],
        neighborhood: data["update-neighborhood"],
        city: data["update-city"],
        state: data["update-state"],
      },
      creditCardHash: req.body.creditCardHash,
    };
    try {
      const update = await repository.update(req);
      if (update.error) throw new Error(update.error);
      res.status(200).json(update.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  register: async (req, res, next) => {
    const data = req.body;

    req.body = {
      name: data["register-name"],
      email: data["register-email"],
      password: data["register-password"],
    };

    try {
      const register = await repository.register(req);
      if (register.error) throw new Error(register.error);
      req.session.token = register.data.token;
      req.session.user = register.data.user.name;
      res.status(201).json(register.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  login: async (req, res, next) => {
    const data = req.body;

    req.body = {
      email: data["login-email"],
      password: data["login-password"],
    };
    try {
      const login = await repository.login(req);
      if (login.error) throw new Error(login.error);
      req.session.token = login.data.token;
      req.session.user = login.data.user.name;
      req.session.id = login.data.user._id;
      res.status(200).json(login.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  formLogin: async (req, res, next) => {
    if (typeof req.session.token != "undefined" && req.session.token)
      res.redirect("/");

    res.render("user/login.ejs", {
      id: req.session.id,
      userName: req.session.user,
    });
  },
};

module.exports = usersController;
