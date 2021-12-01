"use strict";
var fs = require('fs');
var file = fs.readFile('input.txt', 'utf8', function (err, data) {
    const values = data.split('\n');
    // Part 1
    let count = 0;
    values.forEach(function (value, index) {
        const currValue = parseInt(value);
        const previousValue = parseInt(values[index - 1]);
        if (currValue > previousValue) {
            count++;
        }
    });
    console.log("PART 1");
    console.log("TOTAL: " + values.length);
    console.log("ANSWER: " + count);
    // Part 2
    let count2 = 0;
    let sums = [];
    values.forEach(function (value, index) {
        const currValue = parseInt(value);
        const previousValue = parseInt(values[index - 1]);
        const nextValue = parseInt(values[index + 1]);
        const sum = currValue + previousValue + nextValue;
        sums.push(sum);
    });
    sums.forEach(function (value, index) {
        const currValue = value;
        const previousValue = sums[index - 1];
        if (currValue > previousValue) {
            count2++;
        }
    });
    console.log("PART 2");
    console.log("TOTAL: " + sums.length);
    console.log("ANSWER: " + count2);
});
