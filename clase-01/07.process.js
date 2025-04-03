
/**
 * Procesos
 * process : Proporciona información sobre el proceso actual en ejecución
 * 
 * Contiene propiedades y métodos para trabajar con el proceso actual, interactuando con NodeJs
 * 
 */

// ? Argumentos de entrada
// console.log(process.argv);

// ? Controlar el proceso y su salida
// process.exit(0); // 0: salida normal (todo bien)
// process.exit(1); // 1: salida con error

// process.kill(process.pid, "SIGKILL"); // Matar el proceso

// /**
//  * Ejemplo: Ejecutar un comando en el terminal
//  */
// const { exec } = require("node:child_process");
// exec("ls", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`Error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`Error: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });


// ? Controlar eventos del proceso
// process.on("exit", (code) => {
//     console.log(`El proceso ha finalizado con el código ${code}`);
// });
// process.on("uncaughtException", (error) => {
//     console.log(`Se ha producido un error no capturado: ${error.message}`);
// });

// ? current working directory: Directorio actual donde se ejecuta el proceso
// console.log(process.cwd());

// /**
//  * Ejemplo: Ejecutar un comando en el terminal
//  */
// const { exec } = require("node:child_process");
// exec("ls", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`Error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`Error: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });

// platform: Sistema operativo
// console.log(process.platform);
console.log(process.env.PEPITO);

/**
 * Ejemplo: Ejecutar un comando en el terminal
 */
// const { exec } = require("node:child_process");
// exec("ls", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`Error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`Error: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });
