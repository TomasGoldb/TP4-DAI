import consoleLog from './modules/consoleLog.js'
import matematica from './modules/matematica.js'
import fs from 'fs'
import alumno from './modules/alumno.js'
import url from './modules/url.js'
import cc from 'currency-codes'

let nombre="pepe", edad=20;
consoleLog(`Hola ${nombre}, tenes ${edad} años`);

consoleLog(matematica.suma(5,3));
consoleLog(matematica.PI());

let textoArchivo=fs.readFileSync('./entrada.txt', 'utf8');
fs.writeFileSync('./salida.txt', textoArchivo);

consoleLog(alumno("hola","4857"));
consoleLog(alumno("chau","674563"));


consoleLog(url.parsearUrl('https://chatgpt.com/c/67f15ce4-17f8-8011-86c3-0a588787b4e8?chat=true&&hola="jeje"'));
consoleLog(url.parsearUrl('hoa'));


consoleLog(cc.country('argentina')[0].currency);
consoleLog(cc.country('brazil')[0].currency);
consoleLog(cc.country('israel')[0].currency);