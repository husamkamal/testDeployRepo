const fs = require("fs");
const path = require("path");

const mime = require("mime-types");

const publicHandle = (req, res) => {
  const url = req.url;
  const memeType = mime.lookup(url);
  const filePath = path.join(__dirname, "..", "..", url);

  fs.readFile(filePath, (err, data) => {
    if (err) 
    {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("server err");
      return;
    }
    res.writeHead(200, { "Content-Type": memeType });
    res.write(data);
    res.end();
  });
};

module.exports = publicHandle
