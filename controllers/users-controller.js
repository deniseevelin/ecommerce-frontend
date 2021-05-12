const api = require("../core/api");

const usersController = {
  showUsers: async (req, res, next) => {
    console.log(req.session);
    const users = await api(req, "get", "/users");
    return res.send(users.data);
  },
  registerUser: async (req, res, next) => {
    let data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    try {
      const register = await api(req, "post", "/users/register", data);
      if (register.error) throw new Error(register.error);
      req.session.token = register.data.token;
      res.status(201).send(register.data);
    } catch (err) {
      //o erro ta voltando como undefined
      console.log(err);
      return res.status(400).send({ error: err.message });
    }
  },
  UserFormRegister: async (req, res, next) => {
    res.render("users/registerUser.ejs", { name: "Denise" });
  },
  // loginUser: async (req, res, next) => {
  //   let data = {
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: req.body.password,
  //   };
  //   try {
  //     const register = await api(req, "post", "/users/register", data);
  //     if (register.error) throw new Error(register.error);
  //     req.session.token = register.data.token;
  //     res.status(201).send(register.data);
  //   } catch (err) {
  //     //o erro ta voltando como undefined
  //     console.log(err);
  //     return res.status(400).send({ error: err.message });
  //   }
  // },
  UserFormLogin: async (req, res, next) => {
    res.render("users/loginUser.ejs");
  },

  logout: async (req, res, next) => {
    if (
      typeof req.session != "undefined" &&
      typeof req.session.token != "undefined"
    )
      req.session.token = null;
    res.send(true);
  },
};

module.exports = usersController;
