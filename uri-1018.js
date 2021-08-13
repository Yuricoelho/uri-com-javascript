var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());

var cedulasDeCem = parseInt(valor / 100);
var restoCedulaCem = parseInt(valor % 100);
var cedulasDeCinquenta = parseInt(restoCedulaCem / 50);
var restoCedulaCinquenta = parseInt(restoCedulaCem % 50);
var cedulasDeVinte = parseInt(restoCedulaCinquenta / 20);
var restoCedulaVinte = parseInt(restoCedulaCinquenta % 20);
var cedulasDeDez = parseInt(restoCedulaVinte / 10);
var restoCedulaDez = parseInt(restoCedulaVinte % 10);
var cedulasDeCinco = parseInt(restoCedulaDez / 5);
var restoCedulaCinco = parseInt(restoCedulaDez % 5);
var cedulasDeDois = parseInt(restoCedulaCinco / 2);
var restoCedulaDois = parseInt(restoCedulaCinco % 2);
var cedulasDeUm = parseInt(restoCedulaDois);

console.log(`${valor}`);
console.log(`${cedulasDeCem} nota(s) de R$ 100,00`);
console.log(`${cedulasDeCinquenta} nota(s) de R$ 50,00`);
console.log(`${cedulasDeVinte} nota(s) de R$ 20,00`);
console.log(`${cedulasDeDez} nota(s) de R$ 10,00`);
console.log(`${cedulasDeCinco} nota(s) de R$ 5,00`);
console.log(`${cedulasDeDois} nota(s) de R$ 2,00`);
console.log(`${cedulasDeUm} nota(s) de R$ 1,00`);