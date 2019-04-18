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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    var l = s.length;
    var m = s.substring(l - 2, l);
    s = s.substring(0, l - 2);
    switch (m) {
        case 'AM':
            if (s.substring(0, 2) == '12') {
                return '00' + s.substring(2, s.length);
            }
            return s;
        case 'PM': var h = parseInt(s.substring(0, 2));
            if (h != 12) {
                h += 12;
            }
            return h + s.substring(2, s.length);
    }

}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
