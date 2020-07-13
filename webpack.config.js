const path = require("path");

const MODE = process.env.WEBPACK_ENV;
const ENTRY = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT = path.join(__dirname, "static");

const config = {
  entry: ENTRY,
  mode: MODE,
  output: {
    path: OUTPUT,
    filename: "main.js",
  },
};

module.exports = config;
