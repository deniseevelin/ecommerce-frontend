const repository = require("../repositories/user");

const usersController = {
  list: async (req, res, next) => {
    const users = await repository.list();
    return res.send(users.data);
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
      res.status(200).json(login.data);
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: err.message });
    }
  },
  formLogin: async (req, res, next) => {
    if (typeof req.session.token != "undefined" && req.session.token)
      res.redirect("/");

    res.render("user/login.ejs", {userName: null});
  },
};

module.exports = usersController;
