const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

const folder = process.argv[2]??'.';

async function ls(directory){
    let files;
    try {
        files = await fs.readdir(directory)
    }
    catch (err) {
        console.log(pc.red(`❌ Error al leer el directorio ${directory}`)); 
        process.exit(1);
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(directory, file);
        let stats;
        try {
            stats = await fs.stat(filePath); // Obtener información del archivo
        }
        catch (err) {
            console.log(pc.red(`❌ No se pudo leer el directorio ${filePath}`));
            process.exit(1);
        }
        
        const isDirectory = stats.isDirectory();
        const typeFile = isDirectory?"d":"f";
        const fileSize = stats.size.toString();
        const fileModified = stats.mtime.toLocaleDateString();
        
        return `${typeFile} ${pc.blue(file.padEnd(30))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`;
    });

    const filesInfo = await Promise.all(filesPromises);
    filesInfo.forEach(fileInfo => console.log(fileInfo));

}
ls(folder);
