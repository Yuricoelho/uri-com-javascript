var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nomeVendedor = lines.shift();
var salFixo = parseFloat(lines.shift());
var totalVendasMes = parseFloat(lines.shift());

var totalVendas = (totalVendasMes * 0.15 + salFixo).toFixed(2);

console.log(`TOTAL = R$ ${totalVendas}`);
