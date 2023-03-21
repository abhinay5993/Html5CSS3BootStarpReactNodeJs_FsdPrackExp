"use strict";
exports.__esModule = true;
console.log("*** play with Tuple of TS *******");
var tupArr = [];
tupArr.push("test1");
tupArr.push(347);
tupArr.push(56.34);
tupArr.push('Awwjj3484784@()(8)');
console.log("value of Tuple ---> " + tupArr);
tupArr.pop();
console.log("New Vlaue pop post Tuple ---> " + tupArr);
console.log("\n*** play with Unions *******");
console.log("\n*** At a time holds only in value *******");
function playWithUnion(val) {
    if (typeof (val) == "string") {
        console.log("This is String");
    }
    else if (typeof (val) == "boolean") {
        console.log("This is boolean");
    }
    else if (typeof (val) == "number") {
        console.log("This is Number");
    }
}
playWithUnion(998878387874.888888);
var uniArr;
uniArr = [34, 394, 3004, -34.344, 300.300, -344.939];
for (var i = 0; i < uniArr.length; i++) {
    console.log("union Items of Array - " + uniArr[i]);
}
