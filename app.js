const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<body><h1>Hello World</title></h1></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/test') {
        res.write('<html>');
        res.write('<body><h1>Test Now</h1></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/redirect' && method === 'POST'){
        fs.writeFileSync('redirect.txt', 'DUMMY');
        res.statusCode =302;
        res.setHeader('Location', '/')
        return res.end()
    }
 res.setHeader('Content-Type', 'text/html');
 res.write('<html>');
 res.write('<head><h1>Hello World</title></h1>');
 res.write('<body><title>Hello World</title></body>');
 res.write('</html>');
res.end();

});


server.listen(3000);