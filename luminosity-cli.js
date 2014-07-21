var colorutil = require('./myModule/colorutil.js');
var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];
console.log(colorutil.luminosity(r, g, b));