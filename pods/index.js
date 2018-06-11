"use strict";

const express = require("express");
const router = express.Router();

const helloRoutes = require("./hello/routes");

router.use("/hello", helloRoutes);

module.exports = router;
