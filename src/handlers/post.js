const fs = require('fs');
const path = require('path');

const postHandle = (req, res) => {
  const filePath = path.join(__dirname, "..", "posts.json");
  let allData = "";
  req.on("data", (chunk) => {
    allData += chunk;
  });
  req.on("end", () => {
    const urlSearchPrarms = new URLSearchParams(allData);
    const chunkData = urlSearchPrarms.get("post");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("server err");
        return;
      }
      const jsonData=JSON.parse(data);
      jsonData[Date.now()] =chunkData
      // eslint-disable-next-line no-console
      fs.writeFile(filePath,JSON.stringify(jsonData), () => console.log("it`s work"));
    });
    res.writeHead(302,{'Location':'/'})
        res.end()
    })
}

module.exports =postHandle
