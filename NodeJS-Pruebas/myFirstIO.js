//Escribe un programa que, usando una llamada síncrona al sistema de archivos, lea un archivo recibido por argumento
//e imprima a consola la cantidad de saltos de línea ('\n') que contiene. Similar a ejecutar cat file | wc -l.

var fs = require('fs');

var str = fs.readFileSync(process.argv[2]).toString();

var str2 = str.split('\n')

console.log(Number(str2.length-1));