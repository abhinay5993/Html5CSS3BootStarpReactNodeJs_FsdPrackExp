/**
 * This is core JS logic
 * 
 */
let targetHead=document.querySelector("#h2Id");
console.log("Targetting element by id property : ",targetHead);
document.querySelector("#p2Id").innerText=`Targetting element by id property : ${targetHead}`;

let target2Element=document.querySelector(".banner");
console.log("Targetting element by class property : ",target2Element);
document.querySelector("#p3Id").innerText=`Targetting element by class property : ${target2Element}`;

let mult3Element=document.querySelectorAll(".banner");
console.log("Targetting multiple elements : ",mult3Element);
document.querySelector("#p4Id").innerText=`Targetting multiple elements : ${mult3Element}`;

let mult4Element=document.querySelectorAll("[span-data-sel]");
console.log("Targetting any data attribute/property(without any value) element : ",mult4Element);
document.querySelector("#p4Id").innerText=`Targetting any data attribute/property(without any value) element : ${mult4Element}`;

let mult5Element=document.querySelectorAll("input");
console.log("Targetting any tag element : ",mult5Element);
document.querySelector("#p5Id").innerText=`Targetting any tag element : ${mult5Element}`;
