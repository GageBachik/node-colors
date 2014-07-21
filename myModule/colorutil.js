
var luminosity = function(r, g, b){
	return (0.2126*r + 0.7152*g + 0.0722*b);
};
var darken = function(r, g, b) {
	return (r*.8)+' '+(g*.8)+' '+(b*.8);
};

module.exports = {
	luminosity: luminosity,
	darken: darken
};