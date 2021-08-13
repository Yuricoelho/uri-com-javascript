var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempoGastoNaViagem = parseInt(lines.shift());
var velocidadeMedia = parseInt(lines.shift());

var distanciaPercorrida = tempoGastoNaViagem * velocidadeMedia;
var quantidadeEmLitros = (distanciaPercorrida / 12.0).toFixed(3);

console.log(`${quantidadeEmLitros}`);