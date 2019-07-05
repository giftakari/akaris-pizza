/*  GET homepage */

const index = (req, res) => {
  res.render("index", { title: "Akaris-Pizza" });
};

module.exports = {
  index
};

