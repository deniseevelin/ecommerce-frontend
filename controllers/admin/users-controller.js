const repository = require("../../repositories/user");

const usersController = {
  login: async (req, res, next) => {
    let data = req.body;

    req.body = {
      email: data["login-email"],
      password: data["login-password"],
    };

    try {
      const login = await repository.login(req);
      if (login.error) throw new Error(login.error);
      req.session.token = login.data.token;
      req.session.admin = login.data.user.admin;
      req.session.user = login.data.user.name;
      res.status(200).json(login.data);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },
  formLogin: async (req, res, next) => {
    if (typeof req.session.admin != "undefined" && req.session.admin)
      res.redirect("/admin");

    res.render("admin/user/login.ejs", {userName: null});
  },
};

module.exports = usersController;