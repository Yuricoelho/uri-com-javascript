var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var segundos = parseInt(lines.shift());

var horas = parseInt(segundos / 3600);
var minutos = parseInt(segundos % 3600 / 60);
var segundosR = parseInt(segundos % 60);

console.log(`${horas}:${minutos}:${segundosR}`);