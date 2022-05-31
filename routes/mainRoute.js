const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/detalle", mainController.detalleMenu);

module.exports = router;
