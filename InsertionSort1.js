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

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    var temp = arr[n - 1];
    var str = '';
    for (var i = n - 1; i >= 0; i--) {
        if (i == 0) {
            arr[i] = temp;
            break;
        }
        if (arr[i-1] > temp) {
            arr[i] = arr[i-1];            
        }
        else {
            arr[i] = temp;
            break;
            }
        
        str = '';
        for (let j = 0; j < n; j++) {
            str = str + arr[j] + " ";
        }

        console.log(str);
    }
    str = '';
    for (let j = 0; j < n; j++) {
        str = str + arr[j] + " ";
    }

    console.log(str);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
