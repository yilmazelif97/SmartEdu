exports.getIndexPage = (req, res) => {
  console.log(req.session.userID);
  res.render("index", {
    page_name: "index",
  });
};

exports.getAboutPage = (req, res) => {
  res.render("about", {
    page_name: "about",
  });
};

exports.getLoginPage = (req, res) => {
  res.render("login", {
    page_name: "login",
  });
};
