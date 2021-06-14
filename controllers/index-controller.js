const index = {
  home: async (req, res, next) => {
    if (typeof req.session.token == "undefined" || !req.session.token)
      res.render("index/home.ejs", { userName: req.session.user || null });

    res.render("index/home.ejs", {
      id: req.session.id,
      userName: req.session.user || null,
      layout: "layouts/users-default.ejs",
    });
  },
  company: async (req, res, next) => {
    if (typeof req.session.token == "undefined" || !req.session.token)
      res.render("index/company.ejs", { userName: req.session.user || null });

    res.render("index/company.ejs", {
      id: req.session.id,
      userName: req.session.user || null,
      layout: "layouts/users-default.ejs",
    });
  },
  contacts: async (req, res, next) => {
    if (typeof req.session.token == "undefined" || !req.session.token)
      res.render("index/contact.ejs", { userName: req.session.user || null });

    res.render("index/contact.ejs", {
      id: req.session.id,
      userName: req.session.user || null,
      layout: "layouts/users-default.ejs",
    });
  },
  logout: async (req, res, next) => {
    if (
      typeof req.session != "undefined" &&
      typeof req.session.token != "undefined"
    )
      req.session.token = null;
    req.session.user = null;
    req.session.admin = null;
    res.redirect("/");
  },
};

module.exports = index;
