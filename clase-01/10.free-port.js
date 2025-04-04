const { error } = require("node:console");
const net = require("node:net");

const findAvailablePort = (desiredPort) => {
    return new Promise((resolve, reject) => {
        const server = net.createServer();
        server.listen(desiredPort, () => {
            const { port } = server.address();
            server.close(()=> resolve(port));
        })

        server.on("error", (err) => {
            if(err.code === "EADDRINUSE") {
                findAvailablePort(0).then(port=>resolve(port)).catch(err=>reject(err));
            } else {
                reject(err);
            }
        });
    });
}


module.exports = { findAvailablePort };