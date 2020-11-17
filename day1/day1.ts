import {readFileSync} from 'fs';

let data:string = readFileSync('./input.txt', 'utf-8').trim();

let count:number = 0;

for(let i = 0; i < data.length; i++) {
    if (i + 1 == data.length) count += compare(Number(data[i]), Number(data[0]));
    else count += compare(Number(data[i]), Number(data[i+1]));
}

console.log(count);

function compare(first:number, second:number) {
    if (first == second) return first;
    else return 0;
}