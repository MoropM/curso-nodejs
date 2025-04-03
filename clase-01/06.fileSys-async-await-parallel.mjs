import { readFile } from "node:fs/promises"; // A partir de Node 16, recomienda usar node:

/** // ? Lectura Asyncrona
 *  readFile: lectura de archivos
 * 
 */

Promise.all([
    readFile("./README.md", "utf8"),
    readFile("./archivo_.txt", "utf-8")
])
.then(([text, secondText])=>{
    console.log("   :::: Primer texto::::  "); 
    console.log(text);
    console.log("   :::: Segundo texto::::  "); 
    console.log(secondText);
})
.catch(err=>{
    console.log(err);
});
