const http = require("node:http")
const { findAvailablePort } = require("./10.free-port");

const desiredPort = process.env.PORT??3000;
const server = http.createServer((req, res) => {
    console.log("Peticion recibida");
    res.end("Hola mundo - Finalizamos la respuesta");
});

console.log( process.env );

// Puerto donde escuchar
findAvailablePort(desiredPort).then(port=>{
    server.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
}).catch(err=>{
    console.error(err);
});