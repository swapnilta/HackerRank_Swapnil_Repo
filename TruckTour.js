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
 * Complete the truckTour function below.
 */
function truckTour(petrolpumps) {
    /*
     * Write your code here.
     */
    var l = petrolpumps.length;
    var flag = 0;
    var s;

    for (let i = 0; i < l; i++) {
        if (petrolpumps[i][0] > petrolpumps[i][1]) {
            let petrol = 0;

            var j = i;
            do {
                petrol += petrolpumps[j][0];
                petrol -= petrolpumps[j][1];
                if (petrol < 0) {
                    flag = 0;
                    break;
                }
                flag = 1;
                s = i;
                j++;
                if (j == l) {
                    j = 0;
                }

            } while (j != i);
        }
        if (flag == 1) {
            return i;
        }
        
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let petrolpumps = Array(n);

    for (let petrolpumpsRowItr = 0; petrolpumpsRowItr < n; petrolpumpsRowItr++) {
        petrolpumps[petrolpumpsRowItr] = readLine().split(' ').map(petrolpumpsTemp => parseInt(petrolpumpsTemp, 10));
    }

    let result = truckTour(petrolpumps);

    ws.write(result + "\n");

    ws.end();
}
