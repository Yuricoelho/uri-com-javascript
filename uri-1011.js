var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines.shift());
var pi = 3.14159;
var volume = ((4/3.0) * pi * r * r * r).toFixed(3);

console.log(`VOLUME = ${volume}`);