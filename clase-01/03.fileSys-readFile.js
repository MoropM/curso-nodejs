const fs = require("node:fs"); // A partir de Node 16, recomienda usar node:

// const {promisify} = require("node:util");

/** // ? Lectura Syncrona
 *  readFileSync: lectura de archivos
 */
// console.log("Leyendo archivo README.md ...");
// const text = fs.readFileSync("./README.md", "utf8");
// console.log(text);

// console.log("Leyendo cosas mientras lee el primer archivo ...");

// console.log("Leyendo archivo archivo_.txt ...");
// const secondText = fs.readFileSync("./archivo_.txt", "utf8");
// console.log(secondText);


/** // ? Lectura Asyncrona
 *  readFile: lectura de archivos
 * 
 */
console.log("Leyendo archivo README.md ...");
fs.readFile("./README.md", "utf8", (err, text)=>{
    console.log("   :::: Primer texto::::  "); 
    console.log(text);
});

console.log("Leyendo cosas mientras lee el primer archivo ... ...");

console.log("Leyendo archivo archivo_.txt ...");
fs.readFile("./archivo_.txt", "utf-8", (err, secondText)=>{
    console.log("   :::: Segundo texto::::  "); 
    console.log(secondText);
});


/** // ? Lectura Asyncrona
 *  Utilizando promesas con promisify
 * //! Solo en caso de que no exista una versión nativa con promesas
 * 
 */
// const readFilePromise = promisify(fs.readFile);

// console.log("Leyendo archivo README.md ...");
// readFilePromise("./README.md", "utf8")
// .then(text=> {
//     console.log("   :::: Primer texto::::  "); 
//     console.log(text);
// })
// .catch(err=>{
//     console.log(err);
// });

// console.log("Leyendo cosas mientras lee el primer archivo ... ...");

// console.log("Leyendo archivo archivo_.txt ...");
// readFilePromise("./archivo_.txt", "utf-8")
// .then(secondText=> {
//     console.log("   :::: Segundo texto::::  "); 
//     console.log(secondText);
// })
// .catch(err=>{
//     console.log(err);
// });
