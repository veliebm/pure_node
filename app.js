const https = require("https");
const config = require("./config");
const read = require("./read");
const url = require("url");

const options = {
  key: config.key,
  cert: config.cert,
};

const server = https.createServer(options, (req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl == "/") {
    res.write(read.html("index"));
  } else if (reqUrl == "/contact") {
    res.write(read.html("contact"));
  } else {
    res.write("Page doesn't exist.");
    res.statusCode = 404;
  }
  res.end();
});

port = config.port;
hostname = config.hostname;
server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});
