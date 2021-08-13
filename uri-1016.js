var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var c = parseInt(lines.shift());

var total = c / ((90 / 60) - (60 / 60));

console.log(`${total} minutos`);
