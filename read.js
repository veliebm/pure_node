const fs = require("fs");
const path = require("path");
const config = require("./config");

const html = (route) => {
  adjustedRoute = path.join(config.pages_dir, route);
  if (path.extname(adjustedRoute) == "") {
    adjustedRoute = adjustedRoute + ".html";
  }
  return fs.readFileSync(adjustedRoute);
};

module.exports = { html };
