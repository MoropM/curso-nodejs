const fs = require("node:fs"); // A partir de Node 16, recomienda usar node:


/** // ? Lectura Syncrona
 *  readFileSync: lectura de archivos
 */
console.log("Leyendo archivo README.md ...");
const text = fs.readFileSync("./README.md", "utf8");
console.log(text);

console.log("--> Leyendo cosas mientras lee el primer archivo ...");

console.log("Leyendo archivo archivo_.txt ...");
const secondText = fs.readFileSync("./archivo_.txt", "utf8");
console.log(secondText);
