const fs = require("fs");

module.exports = {
  port: 3000,
  hostname: "127.0.0.1",
  pages_dir: "pages",
  key: fs.readFileSync("ssl/key.pem"),
  cert: fs.readFileSync("ssl/cert.pem"),
};
