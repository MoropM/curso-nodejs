import { type, platform, release, version, arch, cpus, totalmem, freemem, uptime } from "node:os";


console.log("Información del sistema operativo:");
console.log("----------------|");
console.log("Tipo del S.O:", type());
console.log("Nombre del S.O:", platform());
console.log("Versión del S.O:", release());
console.log("Versión del S.O:", version());
console.log("Arquitectura:", arch());
console.log("CPUs:", cpus());
console.log("Nombre de la CPU:", cpus()[0].model);
console.log("Procesadores lógicos (hilos):", cpus().length);
console.log("Tamaño de la memoria:", totalmem()/1024/1024/1024, "GB");
console.log("Memoria virtual (libre):", freemem()/1024/1024/1024, "GB");
// console.log("Memoria de la caché:", os.cpus()[0].speed);
console.log("Uptime:", uptime()/60/60/24, "días");

