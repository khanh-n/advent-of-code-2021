"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var file = fs.readFile('input.txt', 'utf8', function (err, data) {
    const values = data.split('\n');
    // Part 1
    let drawing = values[0].split(',');
    let cardData = [];
    let cards = [];
    let cardLength = 5;
    let lines = values.slice(1).filter(line => line.trim().length > 0);
    let winners = [];
    let i = 0;
    lines.forEach((line, index) => {
        cardData[i] = cardData[i] || [];
        cardData[i].push(line);
        if (index % cardLength === cardLength - 1) {
            i++;
        }
    });
    cards = cardData.map(card => card.map(v => v.trim().split(/\s+/)));
    const checkCard = (card) => {
        let result = false;
        card.forEach(row => {
            if (row.filter(r => r === 'X').length === row.length) {
                result = true;
            }
        });
        for (let i = 0; i < card[0].length; i++) {
            let col = [];
            card.forEach(row => {
                col.push(row[i]);
            });
            if (col.filter(c => c === 'X').length === col.length) {
                result = true;
            }
        }
        return result;
    };
    const calcWinner = (card, drawnValue) => {
        let result = 0;
        card.forEach(row => {
            row.forEach(value => {
                if (value !== 'X') {
                    result += parseInt(value);
                }
            });
        });
        return result * drawnValue;
    };
    drawing.forEach((drawnValue, drawIndex) => {
        cards.slice().forEach((card, cardIndex) => {
            card.forEach((row, rowIndex) => {
                row.forEach((value, valueIndex) => {
                    if (value === drawnValue) {
                        row[valueIndex] = 'X';
                    }
                });
            });
            if (checkCard(card)) {
                console.log("PART 1");
                console.log("ANSWER: ");
                console.log("WINNER FOUND: ", card);
                console.log(calcWinner(card, parseInt(drawnValue)));
                // exit(0);
            }
        });
    });
    // Part 2
    drawing.forEach((drawnValue, drawIndex) => {
        cards.slice().forEach((card, cardIndex) => {
            card.forEach((row, rowIndex) => {
                row.forEach((value, valueIndex) => {
                    if (value === drawnValue) {
                        row[valueIndex] = 'X';
                    }
                });
            });
            if (checkCard(card) && winners.indexOf(cardIndex) === -1) {
                console.log("PART 2");
                console.log("ANSWER: ");
                console.log("WINNER FOUND: ", card);
                console.log(calcWinner(card, parseInt(drawnValue)));
                winners.push(cardIndex);
            }
        });
    });
    // console.log("PART 2");
    // console.log("ANSWER: " );
    // console.log("LAST WINNER: ", cards[winners[winners.length-1]])
    // console.log(calcWinner(winners[winners.length-1], parseInt(winningValues[winningValues.length-1])));
});
