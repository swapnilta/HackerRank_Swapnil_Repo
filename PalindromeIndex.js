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

// Complete the palindromeIndex function below.
function palindromeIndex(s) {
    var i = 0;
    var l = s.length;
    if (palindrome(s)) {
        return -1;
    }
    while (i < l) {
        if (i == 0) {
            var res = palindrome(s.slice(1));
            if (res) {
                return 0;
            }
        }
        else if(i==l-1) {
            res =palindrome(s.slice(0, l - 1));
            if (res) {
                return l - 1;
            }
            else {
                return -1;
            }
        }
        else {
            res = palindrome(s.slice(0, i) + s.slice(i + 1));
            if (res) {
                return i;
            }
        }
        i++;
    }

}
function palindrome(str) {
    var i, j, l = str.length;
    i = 0;
    j = l - 1;
    var flag = 0;
    while (i < j) {
        if (str[i] != str[j]) {
            flag = 1;
            break;
        }
        i++;
        j--;
    }

        if (flag == 0) {
            return true;
        }
        return false;
}
    
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = palindromeIndex(s);

        ws.write(result + "\n");
    }

    ws.end();
}
