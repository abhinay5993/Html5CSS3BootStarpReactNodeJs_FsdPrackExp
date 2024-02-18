"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import readline module
var prompt = require('prompt-sync')();
function computeReversalOfStrWithCount(inpx) {
    var temStr = "";
    for (var x = inpx.length - 1; x >= 0; x--) {
        temStr = temStr + inpx[x];
    }
    var newStr = inpx + temStr;
    var resStr = newStr + newStr.length;
    return resStr;
}
var strx = prompt('\nPlease Enter the String : ');
console.log("\nOutPut data : " + computeReversalOfStrWithCount(strx));
