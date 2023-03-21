"use strict";
exports.__esModule = true;
function findMaxNum(num1, num2, num3) {
    var maxVal = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3) ? num2 : num3;
    return maxVal;
}
console.log("\nManium out of three : " + findMaxNum(110.399, 3, 39.884));
console.log("\nHTML project - https://www.knowledgehut.com/blog/web-development/html-projects");
var nt = 473.3949;
console.log("****** Play with String Functions *******");
console.log("\nWorking with toFixed() is : " + nt.toFixed(2));
console.log("\nWorking with toString() is : " + nt.toString());
console.log("\nWorking with valueOf() is : " + nt.valueOf());
console.log("\nWorking with toPrecision() is : " + nt.toPrecision(4));
var nmDat = "  I Heat JS-TS!!...  ";
console.log("\nWorking with split() is : " + nmDat.split("-"));
console.log("\nWorking with charAt() is : " + nmDat.charAt(5));
console.log("\nWorking with indexOf is : " + nmDat.indexOf('T'));
console.log("\nWorking with replace() is : " + nmDat.replace("JS", "JavaScript"));
console.log("\nWorking with trim() is : " + nmDat.trim());
console.log("\nWorking with subString() is : " + nmDat.substring(0, 7));
console.log("\nWorking with upperCase() is : " + nmDat.toLowerCase());
console.log("\nWorking with lowerCase() is : " + nmDat.toUpperCase());
console.log("****** Type Scripts Array *******");
var arrStr = ["JS", "psu", "Ramu", "KK"];
for (var stItem in arrStr) {
    console.log("data Items : " + arrStr[stItem]);
}
var numMult = [[34, 45, 39], [39, 30, 20], [39, 303, 49]];
for (var i = 0; i < numMult.length; i++) {
    for (var j = 0; j < numMult[i].length; j++) {
        console.log(numMult[i][j]);
    }
    console.log();
}
