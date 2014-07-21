var request = require('request');
var colors;
var input = process.argv[2].toLowerCase();
var found = false;
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
	colors = JSON.parse(body);
  }
  colors.map(function(color, index){
  	if (color.name.toLowerCase() === input) {
  		console.log('The colors rgb code is: '+color.rgb.r+' '+color.rgb.g+' '+color.rgb.b);
  		found = true;
  	}
  });
  	if (!found) {
		console.log('Color Not Found!');
  	}
});