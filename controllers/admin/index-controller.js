const index = {
  dashboard: async (req, res, next) => {
    if (typeof req.session.admin == "undefined" || !req.session.admin)
      res.redirect("/admin/login");

    res.render("admin/index/dashboard.ejs", {
      userName: req.session.user || null,
      layout: "layouts/admin-default.ejs",
    });
  },
};

module.exports = index;
