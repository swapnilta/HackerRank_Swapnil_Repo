'use strict';

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for (var i = 0; i < 5; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }       
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log((sum - max) + " " + (sum - min));

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
