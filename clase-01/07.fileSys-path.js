const path = require("node:path");

// Se puden unir rutas con: path.join(path1, path2, ...)

// './content/subfordel/test.txt' // ❌ Prohibido hacer este tipo de referencia
// unix: /
// windows: \

// ? Indica el separador de carpetas de acuerdo al sistema operativo
// console.log(path.sep);

// Ejemplo: Unión de rutas
const filePath = path.join(__dirname, "./content/subfolder/test.txt");
// console.log(filePath);

// Obtener el nombre de archivo
// const fileName = path.basename(filePath);
// console.log(fileName);

// Obtener el nombre del fichero sin extensión
// const fileNameNoExt = path.basename(filePath, ".txt");
// console.log(fileNameNoExt);

const extension = path.extname('nueva_imagen.png');
console.log(extension);

// Obtener el directorio
// const fileDir = path.dirname(filePath);
// console.log(fileDir);