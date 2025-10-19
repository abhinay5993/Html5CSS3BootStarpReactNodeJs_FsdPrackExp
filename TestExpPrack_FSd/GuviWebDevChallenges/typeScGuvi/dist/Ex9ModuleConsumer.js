"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ex2FuncWithReturn_1 = require("./Ex2FuncWithReturn");
const Ex3StringArrays_1 = require("./Ex3StringArrays");
const custInter = require("./Ex5ObjectWithInterFace");
/**
 * Example of import/export modules.
 *
 */
console.log("\nGet the call Function : " + (0, Ex2FuncWithReturn_1.default)('SunDay'));
console.log("Using Export statement1 : " + Ex3StringArrays_1.res1);
console.log("Using Export statement2 : " + Ex3StringArrays_1.filterResut3);
console.log("\nGetting data from Interface : " + custInter.stuObj.getMarksCal(50, 300, 34, 500, 344));
console.log("\nGetting data2 from Interface : " + custInter.stuObj.stuName + " ==> " + custInter.stuObj.grade);
