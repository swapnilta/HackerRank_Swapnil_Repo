'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingSort function below.
function countingSort(arr) {
    var csort = [];
    var ar = [];
    for (let i = 0; i < 100; i++){
        csort[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        csort[arr[i]] += 1;
    }
    return csort;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = countingSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
