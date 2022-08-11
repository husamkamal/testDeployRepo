const http = require("http")

const router = require("./router");

const PORT = process.env.PORT || 3000;

const server = http.createServer(router);

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`the server listen in port http://localhost:${PORT}`));
