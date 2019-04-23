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

// Complete the quickSort function below.
function quickSort(arr) {
    var left=[], equal=[], right=[];
    equal[0] = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > equal) {
            right.push(arr[i]);
        }
        else if (arr[i] < equal) {
            left.push(arr[i]);
        }
        else {
            equal.push(arr[i]);
        }
    }
    for (i = 0; i < equal.length; i++) {
        left.push(equal[i]);
    }
    for (i = 0; i < right.length; i++) {
        left.push(right[i]);
    }
    return left;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = quickSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
