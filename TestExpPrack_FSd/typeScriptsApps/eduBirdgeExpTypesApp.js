"use strict";
exports.__esModule = true;
function findMaxNum(num1, num2, num3) {
    var maxVal = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3) ? num2 : num3;
    return maxVal;
}
console.log("\nManium out of three : " + findMaxNum(110.399, 3, 39.884));
