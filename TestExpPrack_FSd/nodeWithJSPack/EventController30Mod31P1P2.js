/**
 * This is backend Code for Event Listener
 * 
 */
let targetHead = document.querySelector("#h2Id");
targetHead.addEventListener("mouseover",()=>{
    console.log("'mouseover' event called while mouse Cursor pointer is on 'DOM' text : ", targetHead);
    document.querySelector("#p2Id").innerHTML = "'mouseover' event called while mouse Cursor pointer is on 'DOM' text";
});

let target2Element = document.querySelector("input[type='radio']");
target2Element.addEventListener("focus",()=>{
    console.log("'Radio button element foucsed with tab control ' : ", target2Element);
    document.querySelector("#sp3Id").innerText = "'focus' event triggered on radio button tab control.";
})

let mult3Element = document.querySelector("input[type='radio']");
mult3Element.addEventListener("mouseleave",()=>{
    console.log("'mouseleave' triggered while mouse cursor point leave from radio element : ",mult3Element);
    for(let i=0;i<3;i++)
    {
    document.write("'mouseleave' event triggered<br>");
    }
});

let mult4Element = document.querySelector("[span-data-sel]");
mult4Element.addEventListener("mouseenter", () => {
    console.log("This is on-top of text element :", mult4Element);
    document.querySelector("#p4Id").innerText = `'mouseenter' event triggered as soon as user mouse courser come to '<span span-data-sel></span>' element`;
    let mult6Element = document.querySelector("input[type='submit']");
    mult6Element.addEventListener("mouseenter", () =>{
        console.log("This is on-top of 'Submit' button element : ", mult6Element);
        document.querySelector("#p4Id").innerText = "'mouseenter' clean";
    });
});

let mult5Element = document.querySelector("input[type='text']");
mult5Element.addEventListener("change", () => {
    console.log("Targetting input Text-box : ", mult5Element.value);
    let inputStrCounter = (mult5Element.value).length;
    document.querySelector("#p5Id").innerText = `'change' event will triggered as long as we type into text-box and remove focus from text field : ${inputStrCounter}`;
});

let mult6Element = document.querySelector("input[type='submit']");
let inputStrCounter = 0
mult6Element.addEventListener("click", () => {
    console.log("Targetting input Text-box : ", mult6Element);
    inputStrCounter = parseInt(inputStrCounter) + 1;
    document.querySelector("#sp2Id").innerText = `'click' event will triggered when submit button clicked : ${inputStrCounter} times`;
});

let target7Element = document.querySelector("input[type='submit']");
target7Element.addEventListener("blur",()=>{
    console.log("Tab focus inactivated from 'Submit' button : ",target7Element);
    document.querySelector(".banner").innerText = "'blur' event triggered while tab control inactivate from 'Submit' button.";
})

let mult8Element = document.querySelector("input[type='radio']");
mult8Element.addEventListener("input", () => {
    console.log("'Male' radio icon selected : ",mult8Element);
    document.querySelector("#sp4Id").innerText = `'input' event will triggered on 'Male' radio icon activation : ${mult8Element.getAttribute('title')} `;
});