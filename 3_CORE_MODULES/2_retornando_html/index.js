const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'text/html');
    res.end('<h1>Olá, esse é meu primeiro server com HTML</h1><p>Testando</p>');
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});