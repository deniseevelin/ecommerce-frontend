const index = {
  home: async (req, res, next) => {
    res.render("index/home.ejs", {userName: req.session.user || null});
  },
  company: async (req, res, next) => {
    res.render("index/company.ejs", {userName: req.session.user || null});
  },
  contacts: async (req, res, next) => {
    res.render("index/contact.ejs", {userName: req.session.user || null});
  },
  cart: async (req, res, next) => {
    res.render("index/cart.ejs", {userName: req.session.user || null});
  },
  logout: async (req, res, next) => {
    if (
      typeof req.session != "undefined" &&
      typeof req.session.token != "undefined"
    )
      req.session.token = null;
      req.session.user = null;
      req.session.admin = null;
    res.send(true);
  }
}

module.exports = index;
