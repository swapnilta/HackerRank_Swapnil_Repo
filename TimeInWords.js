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
/*function digitsConversion {
    ;
}*/
// Complete the timeInWords function below.
function timeInWords(h, m) {
    var hrs, min;
    if (m <= 30) {
        switch (h) {
            case 1:
                hrs = "one";
                break;
            case 2:
                hrs = "two";
                break;
            case 3:
                hrs = "three";
                break;
            case 4:
                hrs = "four";
                break;
            case 5:
                hrs = "five";
                break;
            case 6:
                hrs = "six";
                break;
            case 7:
                hrs = "seven";
                break;
            case 8:
                hrs = "eight";
                break;
            case 9:
                hrs = "nine";
                break;
            case 10:
                hrs = "ten";
                break;
            case 11:
                hrs = "eleven";
                break;
            default:
                hrs = "twelve";

        }
    }
    else {
        h = h + 1;
        h = h % 12;
        switch (h) {
            case 1:
                hrs = "one";
                break;
            case 2:
                hrs = "two";
                break;
            case 3:
                hrs = "three";
                break;
            case 4:
                hrs = "four";
                break;
            case 5:
                hrs = "five";
                break;
            case 6:
                hrs = "six";
                break;
            case 7:
                hrs = "seven";
                break;
            case 8:
                hrs = "eight";
                break;
            case 9:
                hrs = "nine";
                break;
            case 10:
                hrs = "ten";
                break;
            case 11:
                hrs = "eleven";
                break;
            default:
                hrs = "twelve";

        }
    }
    if (m == 0) {
        return hrs + " o' clock";
    }
    else if (m == 15) {
        return "quarter past " + hrs;
    }
    else if (m == 30) {
        return "half past " + hrs;
    }
    else if (m == 45) {
        return "quarter to " + hrs;
    }
    else if (m < 30) {
        switch (m) {
            case 1:
                min = "one";
                break;
            case 2:
                min = "two";
                break;
            case 3:
                min = "three";
                break;
            case 4:
                min = "four";
                break;
            case 5:
                min = "five";
                break;
            case 6:
                min = "six";
                break;
            case 7:
                min = "seven";
                break;
            case 8:
                min = "eight";
                break;
            case 9:
                min = "nine";
                break;
            case 10:
                min = "ten";
                break;
            case 11:
                min = "eleven";
                break;
            case 12:
                min = "twelve";
                break;
            case 13:
                min = "thirteen";
                break;
            case 14:
                min = "fourteen";
                break;
            case 16:
                min = "sixteen";
                break;
            case 17:
                min = "seventeen";
                break;
            case 18:
                min = "eighteen";
                break;
            case 19:
                min = "nineteen";
                break;
            case 20:
                min = "twenty";
                break;
            case 21:
                min = "twenty one";
                break;
            case 22:
                min = "twenty two";
                break;
            case 23:
                min = "twenty three";
                break;
            case 24:
                min = "twenty four";
                break;
            case 25:
                min = "twenty five";
                break;
            case 26:
                min = "twenty six";
                break;
            case 27:
                min = "twenty seven";
                break;
            case 28:
                min = "twenty eight";
                break;
            case 29:
                min = "twenty nine";
                break;
        }
        if (m != 1) {
            return min + " minutes past " + hrs;
        }
        else {
            return min + " minute past " + hrs;
        }
    }
    else {
        switch (m) {
            case 59:
                min = "one";
                break;
            case 58:
                min = "two";
                break;
            case 57:
                min = "three";
                break;
            case 56:
                min = "four";
                break;
            case 55:
                min = "five";
                break;
            case 54:
                min = "six";
                break;
            case 53:
                min = "seven";
                break;
            case 52:
                min = "eight";
                break;
            case 51:
                min = "nine";
                break;
            case 50:
                min = "ten";
                break;
            case 49:
                min = "eleven";
                break;
            case 48:
                min = "twelve";
                break;
            case 47:
                min = "thirteen";
                break;
            case 46:
                min = "fourteen";
                break;
            case 44:
                min = "sixteen";
                break;
            case 43:
                min = "seventeen";
                break;
            case 42:
                min = "eighteen";
                break;
            case 41:
                min = "nineteen";
                break;
            case 40:
                min = "twenty";
                break;
            case 39:
                min = "twenty one";
                break;
            case 38:
                min = "twenty two";
                break;
            case 37:
                min = "twenty three";
                break;
            case 36:
                min = "twenty four";
                break;
            case 35:
                min = "twenty five";
                break;
            case 34:
                min = "twenty six";
                break;
            case 33:
                min = "twenty seven";
                break;
            case 32:
                min = "twenty eight";
                break;
            case 31:
                min = "twenty nine";
                break;
        }
        return min + " minutes to " + hrs;
    }         
}
        
    

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}
