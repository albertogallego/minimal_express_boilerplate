"use strict";

const router = require("express").Router();
const helloController = require("./controllers");

router.route("/").get(helloController.helloWorld);

module.exports = router;
