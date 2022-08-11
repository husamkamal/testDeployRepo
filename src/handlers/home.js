const fs = require("fs");
const path = require("path");

const homeHandle = (res) => {
  const filePath = path.join(__dirname, "..", "..", "public", "index.html");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("server err");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
};

module.exports = homeHandle;
