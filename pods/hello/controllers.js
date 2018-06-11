"use strict";

const helloWorld = (req, res) => {
  res.json({ data: "Hello World!" });
};

module.exports = {
  helloWorld
};
