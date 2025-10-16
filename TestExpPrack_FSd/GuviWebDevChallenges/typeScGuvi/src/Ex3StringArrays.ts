/**
 * string array literal diclarations
 * 
 */
let strProgramArray:string[]=["Java 17","Python3","TypeScripts","JS","PERL","Shell"];
console.log("\nShow programmings : "+strProgramArray);
console.log("\nSize of programmings : "+strProgramArray.length);

strProgramArray.forEach(
    (dataItems:string,indPosition:number)=>console.log(dataItems+" <= array literal items=> "+indPosition)
);
console.log("\nCheck Element present or not : "+strProgramArray.findIndex(dataItems => dataItems === 'JS'));

/**
 * string object array diclarations using new Array() constructor
 */
let strObjFoodArray:Array<string>=new Array("Pizza","Cake","Sandwidtch","MilkShake","Idli","Milk","Moosz");
console.log("\nShow Foods : "+strObjFoodArray);
console.log("\nSize of Foods : "+strObjFoodArray.length);

strObjFoodArray.forEach(
    (dataItems:string,indPosition:number)=>console.log(dataItems+" <= Objects => "+indPosition)
);

console.log("\nCheck Element position : "+strObjFoodArray.findIndex(dataItems => dataItems === 'Corn'));
console.log("******** Filtering Items ****************");
let filterResut1=strObjFoodArray.filter(dataItems=>dataItems.includes("Ca"));
console.log("Filtered Result1 : "+filterResut1);
let filterResut3:any[]=strObjFoodArray.filter(dataItems=>dataItems.startsWith("M"));
console.log("Filtered Result3 : "+filterResut3);
console.log("Using include function : "+strObjFoodArray.includes(""));
console.log("Using include function2 : "+strObjFoodArray.includes("Idli"));

let strRandomArray:any[]=["Java 17","",495,0.00045,"945.34","JS",'d3949',-5,3.009];
console.log("******** Filtering only Numbers ****************");
strRandomArray.forEach(dataItems=>{
    if(typeof dataItems==='number')
        console.log("Found the Number : "+dataItems);
    else
       console.log("Not a Number."); 
});