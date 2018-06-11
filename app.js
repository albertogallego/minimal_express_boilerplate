"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");

const pods = require("./pods");

mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(`mongodb://${config.db.host}/${config.db.name}`)
  .then(() => console.log("Connection succesful"))
  .catch(error => console.error(error));

app.use(pods);

module.exports = app.listen(config.app.port, function() {
  console.log(`listening on port ${config.app.port}!`);
});
