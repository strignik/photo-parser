var fs  = require("fs");

fs.unlink('result.csv', (err) => {
  if (err) throw err;
  console.log('successfully deleted result.csv');
});

var line = fs.readFileSync('addit.csv').toString().split('\n').
forEach(l => {
	var list = l.split(' ');
	if(list.length>2){
		var a = list[0];
		list.slice(1, list.length).forEach(b => {
			var str = a+';'+b+'\n';
			fs.appendFileSync('result.csv', str, 'utf8', (err) => {
  			if (err) throw err;
  			});
		});
	} else {
		if(list.length == 2){
			fs.appendFileSync('result.csv', list[0]+';'+list[1], 'utf8', (err) => {
  			if (err) throw err;
  			});
		}
	}
});