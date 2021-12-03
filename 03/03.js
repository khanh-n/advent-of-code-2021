"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var file = fs.readFile('input.txt', 'utf8', function (err, data) {
    const values = data.split('\n');
    let bits = [];
    let gamma = '';
    let epsilon = '';
    // Part 1
    values.forEach(function (value, index) {
        for (let i = 0; i < value.length - 1; i++) {
            if (index === 0) {
                bits[i] = parseInt(value[i]);
            }
            else {
                if (value[i] === '1') {
                    bits[i]++;
                }
                else {
                    bits[i]--;
                }
            }
        }
    });
    bits.forEach(function (value, index) {
        let myBits = [];
        let reversedBits = [];
        if (value > 0) {
            myBits[index] = 1;
            reversedBits[index] = 0;
        }
        else {
            myBits[index] = 0;
            reversedBits[index] = 1;
        }
        gamma += myBits[index];
        epsilon += reversedBits[index];
    });
    console.log("PART 1");
    console.log("GAMMA: " + gamma + " / " + parseInt(gamma, 2));
    console.log("EPSILON: " + epsilon + " / " + parseInt(epsilon, 2));
    console.log("ANSWER: " + parseInt(gamma, 2) * parseInt(epsilon, 2));
    // Part 2
    let oxygenValues = values.slice();
    let scrubberValues = values.slice();
    bits.forEach(function (bit, bindex) {
        if (oxygenValues.length > 1) {
            let count1 = oxygenValues.filter(o => o[bindex] === '1').length;
            let count2 = oxygenValues.filter(o => o[bindex] === '0').length;
            if (count1 >= count2) {
                oxygenValues = oxygenValues.filter(o => o[bindex] === '1');
            }
            else {
                oxygenValues = oxygenValues.filter(o => o[bindex] === '0');
            }
            console.log(count1 + "/" + count2);
        }
        if (scrubberValues.length > 1) {
            let count3 = scrubberValues.filter(o => o[bindex] === '1').length;
            let count4 = scrubberValues.filter(o => o[bindex] === '0').length;
            if (count3 >= count4) {
                scrubberValues = scrubberValues.filter(o => o[bindex] === '0');
            }
            else {
                scrubberValues = scrubberValues.filter(o => o[bindex] === '1');
            }
            console.log(count3 + "/" + count4);
        }
    });
    console.log("PART 2");
    console.log("OXYGEN: " + oxygenValues[0]);
    console.log("SCRUBBER: " + scrubberValues[0]);
    console.log("ANSWER: " + parseInt(oxygenValues[0], 2) * parseInt(scrubberValues[0], 2));
});
