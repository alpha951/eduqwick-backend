const express = require("express");
const router = express.Router();

const questionRoutes = require("./questons.routes");

router.use("/questions", questionRoutes);

module.exports = router;
