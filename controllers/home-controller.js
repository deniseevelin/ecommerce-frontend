const home = {
  form: async (req, res, next) => {
    res.render("home.ejs");
  },
  homeAccount: async (req, res, next) => {
    res.render("financial/homeAccount.ejs");
  },
  homeUser: async (req, res, next) => {
    res.render("users/homeUser.ejs");
  },
  company: async (req, res, next) => {
    res.render("company.ejs");
  }
};

module.exports = home;
