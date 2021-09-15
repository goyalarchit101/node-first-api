var http = require('http');
var fs = require('fs');

const server = http.createServer((req, res) => {

    const objData = fs.readFileSync(`${__dirname}/user.json`, "utf-8");
    if (req.url === "/")
        res.end('hello from other side');
    else if (req.url === "/about")
        res.end("hello from about side")
    else if (req.url === "/contact")
        res.end("hello from contact side")
    else if (req.url === "/userApi") {
        res.writeHead(200, { "content-type": "application/json" }); // to change the status code
        res.end(objData);
    }
    else {
        res.writeHead(404, { "content-type": "text/html" }); // to change the status code
        res.end("<h1>404 , no page found</h1>")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listining the port 8000")
});


