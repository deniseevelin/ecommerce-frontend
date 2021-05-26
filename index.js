const express = require("express");
const cors = require("cors");
const consign = require("consign");
const bodyParser = require("body-parser");
const cookieParse = require("cookie-parser");
const cookieSession = require("cookie-session");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "layouts/default");
app.use(cors());
app.use(express.json());
app.use(cookieParse());
app.use(cookieSession({
  name: "denise-session",
  keys: ["12345678"],
  maxAge: 24*60*60*1000
}));
consign().include("routes").into(app);

app.listen(8000, () => {
  console.log("CORS running on port 8000!");
});

module.exports = app;
