const index = {
  form: async (req, res, next) => {
    res.render("home.ejs");
  },
  company: async (req, res, next) => {
    res.render("company.ejs");
  },
  contacts: async (req, res, next) => {
    res.render("contact.ejs");
  },
  cart: async (req, res, next) => {
    res.render("cart.ejs");
  },
  userFormLogin: async (req, res, next) => {
    res.render("loginUser.ejs");
  },
};

module.exports = index;
