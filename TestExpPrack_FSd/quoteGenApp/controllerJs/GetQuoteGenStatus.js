let viewBtn = document.querySelector(".viewBtn1");
let closeBtn = document.querySelector(".closeBtn2");
let modalView = document.querySelector(".box1Cont");
let quoteTxt = document.querySelector("#textShow");
let autherName = document.querySelector("#authName");

viewBtn.addEventListener("click", () => {
    console.log("View button clicked!!..");
    modalView.classList.add("activate");
    callToQuotesApi();
});

closeBtn.addEventListener("click", () => {
    console.log("Modal closed..!!..");
    modalView.classList.remove("activate");
});

async function callToQuotesApi() {
    let jsonResponseData = (await fetch("https://type.fit/api/quotes")).json();
    console.log(jsonResponseData);
    jsonResponseData.then((res) => {
        let getRandNo = generateRandomNumber();
        let textField = res[getRandNo].text;
        let authorField = res[getRandNo].author;
        console.log(`Populated text : ${textField}`);
        console.log(`Populated author : ${authorField}`);
        quoteTxt.innerHTML = textField;
        autherName.innerHTML = authorField;
    });
}

/**
 * This generates a random number between 0 and 1500 (inclusive)
 * @returns Number
 */
function generateRandomNumber() {
    let randNum = Math.floor(Math.random() * 16);
    console.log(`Generate random Number : ${randNum}`);
    return randNum;
}