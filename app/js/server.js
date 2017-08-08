var fs = require('fs');
fs.writeFile('test.txt', totalList, function(err) {
	if(err) {
		return console.log(err);
	}
})