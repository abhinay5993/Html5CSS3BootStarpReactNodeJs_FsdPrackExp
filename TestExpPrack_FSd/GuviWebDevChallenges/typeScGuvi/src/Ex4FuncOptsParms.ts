/**
 * 1. Function.
 * 2. Anonymous.
 * 3. Arrow Functions - ES6 feature.
 * 
 */
type AliasOfRefType=string|number;
type DEFT_OUT='Welcome to TypeSctipts.';
function doMeetAndGreet(strName:string,showFlag:boolean):AliasOfRefType {
    return strName.length!=0 && showFlag? `Welcome to Play with ${strName}`: -1;
}

let resultVal=doMeetAndGreet("CaratLane",true);
console.log(resultVal);

let result2Val=doMeetAndGreet("500",false);
console.log(result2Val);

function latestArrow1Func():DEFT_OUT {
    return "Welcome to TypeSctipts.";
};
console.log(latestArrow1Func());

/**
 * Implimentation with Optional parameter with arrow function.
 * 
 */
let resultOfMultiply=(num1:number,num2:number,num3?:number):number=>{
    let computRes=((num1*num2)*(num3?num3:1));
    return computRes;
}
console.log("\nGet the Result of Mutiplication : "+resultOfMultiply(30,100));
console.log("\nGet the Result of Mutiplication : "+resultOfMultiply(30,10,5));

let getMeOddOrEvenNumber=(inputArray:number[],bothEvenOdd?:boolean):void=>{
    console.log("\nList of Even numbers : "+inputArray.filter(num=>num%2==0));
    if(bothEvenOdd){
    console.log("\nList of Odd numbers  : "+inputArray.filter(num=>num%2!==0));
    }
}
getMeOddOrEvenNumber([3,0,23,44,34,4,309,845,394,1000]);
getMeOddOrEvenNumber([3,0,44,34,43949,1000,39,99],true);

/**
 * Nested / Inner function
 * 
 */

type innerMethRef=(strPar:string)=>string;

function outerFuncMain(strParm1:string):innerMethRef {
    console.log("\nI am getting called from Outer Function body : "+strParm1);
    return (strParm2:string):string => {
           return "Hey!! Welcome.."+strParm1+" "+strParm2+"";
    }
}
console.log("\nValue Of : "+outerFuncMain("TypeScript Tests.."));
let outerFuncLog=outerFuncMain("Test");
let innerCallFunc=outerFuncLog("SDET-QA");
console.log("Value of 1st : "+outerFuncLog);
console.log("Value of 2nd : "+innerCallFunc);