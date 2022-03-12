const http = require('http');

const port = 8080;


const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end('<h1>Home page</h1>');
    }

    if (req.url === '/users') {
        let users = [
            {
                "name": "Pedro",
                "age": "23"
            },
            {
                "name": "José",
                "age": "24"
            }
        ];

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(users));
    }
})

server.listen(port, () => console.log('running server'));