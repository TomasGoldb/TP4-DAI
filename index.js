import consoleLog from './modules/consoleLog.js'
import matematica from './modules/matematica.js'
import fs from 'fs'

let nombre="pepe", edad=20;
consoleLog(`Hola ${nombre}, tenes ${edad} años`);

consoleLog(matematica.suma(5,3));
consoleLog(matematica.PI());

let textoArchivo=fs.readFileSync('./entrada.txt', 'utf8');
fs.writeFileSync('./salida.txt', textoArchivo);