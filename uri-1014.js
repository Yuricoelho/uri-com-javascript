var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines.shift());
var Y = parseFloat(lines.shift());

var valorGasto = (X / Y).toFixed(3);

console.log(`${valorGasto} km/l`);