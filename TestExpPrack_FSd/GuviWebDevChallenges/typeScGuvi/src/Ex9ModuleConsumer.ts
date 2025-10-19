import resultIndex from "./Ex2FuncWithReturn";
import { res1,filterResut3 as res2 } from "./Ex3StringArrays";
import * as custInter from "./Ex5ObjectWithInterFace";

/**
 * Example of import/export modules.
 * 
 */

console.log("\nGet the call Function : "+resultIndex('SunDay'));
console.log("Using Export statement1 : "+res1);
console.log("Using Export statement2 : "+res2);
console.log("\nGetting data from Interface : "+custInter.stuObj.getMarksCal(50,300,34,500,344));
console.log("\nGetting data2 from Interface : "+custInter.stuObj.stuName+" ==> "+custInter.stuObj.grade);