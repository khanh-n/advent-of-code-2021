"use strict";
var fs = require('fs');
var file = fs.readFile('input.txt', 'utf8', function (err, data) {
    const values = data.split('\n');
    // Part 1
    let pos = 0;
    let depth = 0;
    values.forEach(function (value, index) {
        let direction = value.split(' ')[0];
        let distance = parseInt(value.split(' ')[1]);
        switch (direction) {
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
    let pos2 = 0;
    let depth2 = 0;
    let aim = 0;
    values.forEach(function (value, index) {
        let direction = value.split(' ')[0];
        let distance = parseInt(value.split(' ')[1]);
        switch (direction) {
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
