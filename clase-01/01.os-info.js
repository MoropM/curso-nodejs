const os = require("node:os");


console.log("Información del sistema operativo:");
console.log("----------------|");
console.log("Tipo del S.O:", os.type());
console.log("Nombre del S.O:", os.platform());
console.log("Versión del S.O:", os.release());
console.log("Versión del S.O:", os.version());
console.log("Arquitectura:", os.arch());
console.log("CPUs:", os.cpus());
console.log("Nombre de la CPU:", os.cpus()[0].model);
console.log("Procesadores lógicos (hilos):", os.cpus().length);
console.log("Tamaño de la memoria:", os.totalmem()/1024/1024/1024, "GB");
console.log("Memoria virtual (libre):", os.freemem()/1024/1024/1024, "GB");
// console.log("Memoria de la caché:", os.cpus()[0].speed);
console.log("Uptime:", os.uptime()/60/60/24, "días")

