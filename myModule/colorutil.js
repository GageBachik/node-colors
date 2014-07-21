var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];
var luminosity = function(){
	return (0.2126*r + 0.7152*g + 0.0722*b);
};

module.exports = {
	luminosity: luminosity
};