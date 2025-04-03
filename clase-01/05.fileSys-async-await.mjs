import { readFile } from "node:fs/promises"; // A partir de Node 16, recomienda usar node:

/** // ? Lectura Asyncrona
 *  readFile: lectura de archivos
 * 
 */
console.log("Leyendo archivo README.md ...");
const text = await readFile("./README.md", "utf8");
console.log("   :::: Primer texto::::  "); 
console.log(text);

console.log("Leyendo cosas mientras lee el primer archivo ... ...");

console.log("Leyendo archivo archivo_.txt ...");
const secondText = await readFile("./archivo_.txt", "utf-8");
console.log("   :::: Segundo texto::::  "); 
console.log(secondText);

