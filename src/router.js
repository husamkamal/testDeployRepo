const {
  postHandle, homeHandle, publicHandle, send,
} = require("./handlers");

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === "/") {
    homeHandle(res);
  } else if (endpoint.includes("public")) {
    publicHandle(req, res);
  } else if (endpoint === "/create-post") {
    postHandle(req, res);
  } else if (endpoint === "/posts") {
    send(res);
  } else {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.write("server err");
    res.end();
  }
};

module.exports = router;
