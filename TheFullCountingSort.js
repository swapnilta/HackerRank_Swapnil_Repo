'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countSort function below.
function countSort(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        arr[i][1] = '-';
    }
    var csort = [];
    var ar = [];
    for (let i = 0; i < 100; i++) {
        csort[i] = 0;
        ar.push([]);
    }
    for (let i = 0; i < arr.length; i++) {
        csort[arr[i][0]] += 1; 
        ar[arr[i][0]].push(arr[i][1]);

    }
    var str = '';
    for (let i = 0; i < 100; i++){
        for (let j = 0; j < csort[i];j++) {
            str += ar[i][j]+" ";
        }
    }
    console.log(str);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}
