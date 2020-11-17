"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var data = fs_1.readFileSync('./input.txt', 'utf-8').trim();
var count = 0;
for (var i = 0; i < data.length; i++) {
    if (i + 1 == data.length)
        count += compare(Number(data[i]), Number(data[0]));
    else
        count += compare(Number(data[i]), Number(data[i + 1]));
}
console.log(count);
function compare(first, second) {
    if (first == second)
        return first;
    else
        return 0;
}
