var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numFunc = parseInt(lines.shift());
var numHorasTrabalhadas = parseInt(lines.shift());
var valPorHora = parseFloat(lines.shift());

var salFunc = parseFloat(numHorasTrabalhadas * valPorHora).toFixed(2);

console.log(`NUMBER = ${numFunc}`);
console.log(`SALARY = U$ ${salFunc}`);