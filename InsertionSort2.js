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

// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
    var key,str;
    for (let k = 0; k < arr.length - 1; k++) {
        for (let i = 0; i < arr.length - 1; i++) {
             key = arr[k + 1];
            if (i == k + 1)
                break;
            if (arr[i] > key) {
                arr[k + 1] = arr[i];
                arr[i] = key;
            }
        }
        str = '';
        for (let i = 0; i < arr.length; i++)
        {
            str+=arr[i] + " ";
        }
        console.log(str);
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
