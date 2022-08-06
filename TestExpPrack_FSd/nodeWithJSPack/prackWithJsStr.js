/*
String expreiment with literals and Object creation functions
*/

let strLit="Hello!! JS";
let objStr=new String("Hey..!! AL... this QA..");
console.log("Value of literral : "+strLit);
console.log("Type of literral : "+typeof(strLit));
console.log("Object of Str : "+objStr);
console.log("Type of Object Str : "+typeof(objStr));

//length of string object
console.log("Length of string object : "+objStr.length);

//extraction of string with slice functions which supports both positive and negative indexes
console.log("Extraction with slice : "+objStr.slice(-10,-6));

//extraction of string with substring functions
console.log("Extraction with substring : "+strLit.substring(7,2));

//extraction of string with substr
console.log("Extraction with substr : "+strLit.substr(3,8));

//String replace method
console.log("Extraction with replace() : "+strLit.replace("JS","SDET-QA_Automation"));

//String replacement with regEx for single string
console.log("Extraction with replace() with regEx /replaceText/i : "+strLit.replace(/!/i,"Full Stack Java Dev"));

//String replacement with regEx for all the matched string into script file
console.log("Extraction with replace() for all regEx /replaceText/g  : "+strLit.replace(/!/g,"Full Stack Java Dev"));

function ageCalc(inpAge)
{
const age =18;
let exp=(inpAge>=age)?'Eligible for vote':'Not!! Eligible for vote';
return exp;
}
console.log(ageCalc(8));

//String toUpperCase()
console.log("Conver to toUpperCase  : "+strLit.toUpperCase());
//String toLowerCase()
console.log("Conver to toLowerCase  : "+ageCalc().toLowerCase());

//String concatination
console.log(strLit.concat(ageCalc(50)));