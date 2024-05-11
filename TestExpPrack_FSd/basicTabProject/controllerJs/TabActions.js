/**
 * JS actions logic will go here
 * 
 */
let btn1Tab=document.querySelector(".btn1Tab");
let btn2Tab=document.querySelector(".btn2Tab");
let btn3Tab=document.querySelector(".btn3Tab");

let box1Cont=document.querySelector(".box1Cont");
let box2Cont=document.querySelector(".box2Cont");
let box3Cont=document.querySelector(".box3Cont");

btn1Tab.addEventListener("click",()=>{
    console.log("HTML clicked");
    box1Cont.classList.add("activate");
    box2Cont.classList.remove("activate");
    box3Cont.classList.remove("activate");
    btn1Tab.classList.add("tab-activate");
    btn2Tab.classList.remove("tab-activate");
    btn3Tab.classList.remove("tab-activate");
});

btn2Tab.addEventListener("click",()=>{
    console.log("CSS clicked");
    box1Cont.classList.remove("activate");
    box2Cont.classList.add("activate");
    box3Cont.classList.remove("activate");
    btn1Tab.classList.remove("tab-activate");
    btn2Tab.classList.add("tab-activate");
    btn3Tab.classList.remove("tab-activate");
});

btn3Tab.addEventListener("click",()=>{
    console.log("TS-JS clicked");
    box1Cont.classList.remove("activate");
    box2Cont.classList.remove("activate");
    box3Cont.classList.add("activate");
    btn1Tab.classList.remove("tab-activate");
    btn2Tab.classList.remove("tab-activate");
    btn3Tab.classList.add("tab-activate");
});