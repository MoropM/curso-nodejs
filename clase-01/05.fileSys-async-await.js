const {readFile} = require("node:fs/promises"); // A partir de Node 16, recomienda usar node:

/** // ? Lectura Asyncrona
 *  readFile: lectura de archivos
 * 
 */
// IIFE: Immediately Invoked Function Expression
// IIFE: Expresión de Función Invocada Inmediatamente
// IIFE: Expresión de Función Inmediatamente Invocada
(
    async () => {
        console.log("Leyendo archivo README.md ...");
        const text = await readFile("./README.md", "utf8");
        console.log("   :::: Primer texto::::  "); 
        console.log(text);
        
        console.log("Leyendo cosas mientras lee el primer archivo ... ...");
        
        console.log("Leyendo archivo archivo_.txt ...");
        const secondText = await readFile("./archivo_.txt", "utf-8");
        console.log("   :::: Segundo texto::::  "); 
        console.log(secondText);
    }
)()

