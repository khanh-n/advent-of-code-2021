var fs = require('fs');
var file = fs.readFile('input.txt', 'utf8', function (err: any, data: any) {
	const values : Array<string> = data.split('\n');

	// Part 1
	let pos : number = 0;
	let depth : number = 0;

	values.forEach(function(value, index) {
		let direction = value.split(' ')[0];
		let distance = parseInt(value.split(' ')[1]);

		switch(direction) {
			case 'forward':
				pos += distance;
				break;
			case 'down':
				depth += distance;
				break;
			case 'up':
				depth -= distance;
				break;
		}
	});

	console.log("PART 1");
	console.log("TOTAL: " + values.length);
	console.log("ANSWER: " + pos * depth);

	// Part 2
	let pos2 : number = 0;
	let depth2 : number = 0;
	let aim: number = 0;

	values.forEach(function(value, index) {
		let direction = value.split(' ')[0];
		let distance = parseInt(value.split(' ')[1]);

		switch(direction) {
			case 'forward':
				pos2 += distance;
				depth2 += aim * distance;
				break;
			case 'down':
				aim += distance;
				break;
			case 'up':
				aim -= distance;
				break;
		}
	});

	console.log("PART 2");
	console.log("TOTAL: " + values.length);
	console.log("ANSWER: " + pos2 * depth2);

});
