const fs = require("node:fs/promises"); // A partir de Node 16, recomienda usar node:


/** // ? Lectura Asyncrona
 *  readFile: lectura de archivos
 * 
 */
console.log("Leyendo archivo README.md ...");
fs.readFile("./README.md", "utf8")
.then(text=> {
    console.log("   :::: Primer texto::::  "); 
    console.log(text);
})
.catch(err=>{
    console.log(err);
});

console.log("Leyendo cosas mientras lee el primer archivo ... ...");

console.log("Leyendo archivo archivo_.txt ...");
fs.readFile("./archivo_.txt", "utf-8")
.then(secondText=> {
    console.log("   :::: Segundo texto::::  "); 
    console.log(secondText);
})
.catch(err=>{
    console.log(err);
});

