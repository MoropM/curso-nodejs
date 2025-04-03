const fs = require("node:fs"); // A partir de Node 16, recomienda usar node:

// ? readFileSync: lectura de archivos

// Syncrona: Bloquea todos las demás operaciones hasta que se complete la operación
// Asyncrona: No bloquea las demás operaciones

const stats = fs.statSync("./README.md");

console.log(
    stats.isFile(), // true
    stats.isDirectory(), // false
    stats.isBlockDevice(), // false
    stats.isCharacterDevice(), // false
    stats.isSymbolicLink(), // false
    stats.isFIFO(), // false
    stats.isSocket(), // false
    stats.size // tamaño en bytes
);