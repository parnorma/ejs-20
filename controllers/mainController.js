const menu = require("../platos");

module.exports = {
  home: (req, res) => {
    res.render("index", {
      platos: menu,
    });
  },
  detalleMenu: (req, res) => {
    const elemento = menu.find((plato) => plato.id == req.params.id);
    if (elemento) {
      res.render("detalleMenu", { plato: elemento });
    } else {
      res.send("404 - Not Found");
    }
  },
};
