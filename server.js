const http = require('http');
const handleRoutes = require('./routes/tasks');

const server = http.createServer((req, res) => {
    handleRoutes(req, res);
});

server.listen(3000, () => {
    console.log('Serveur lancé sur http://localhost:3000');
});