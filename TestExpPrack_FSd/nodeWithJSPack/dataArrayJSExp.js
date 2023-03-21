/*
Array expreiment with literals and Object creation functions
*/
//Literal syntax
let litArrObj=['TestOrder',null,-334,33,30040,0.3434,'C++',]
console.log("Array Literal Value : "+litArrObj);

//Array object with new keyword
let arryObj=new Array();
arryObj.push(38);
arryObj.push(NaN);
console.log(arryObj);

//Array to String()
console.log(litArrObj.join("%@@"));

//Array with Constructor and pass arry Literals
let arrObj2=new Array("test",1,45.0034,-4.34,"KKs","Al");
let arrObj3=new Array("push",'ram','apple','google');
console.log("\nReverse arrry : "+arrObj3.reverse());
let varArr4=arrObj2.concat(arrObj3);

console.log("\nIndex of value  : "+varArr4.indexOf("KKs"));
arrObj2.push("dsa");
arrObj2.push("System design");
console.log("\nNew Array2 data   : "+arrObj2);