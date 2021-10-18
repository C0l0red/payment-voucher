const http = require('http');
const app = require('./app');

const server = http.createServer(app),
     { PORT } = process.env;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})