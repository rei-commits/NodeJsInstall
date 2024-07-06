const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.write('<h1>Hello World!</h1>');
        res.write('<p>Welcome to the home page.</p>');
    } else if (req.url === '/about') {
        res.write('<h1>About Us</h1>');
        res.write('<p>This is the about page.</p>');
    } else if (req.url === '/contact') {
        res.write('<h1>Contact Us</h1>');
        res.write('<p>This is the contact page.</p>');
    } else {
        res.statusCode = 404;
        res.write('<h1>404 Not Found</h1>');
        res.write('<p>The page you are looking for does not exist.</p>');
    }

    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
