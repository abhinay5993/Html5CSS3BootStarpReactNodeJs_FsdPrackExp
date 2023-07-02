var prompt = require('prompt-sync')();

function checkLuckyDay(inpDay) {
    let luckyData="";
    switch (inpDay) {
        case 0:
            luckyData="Monday";
            break;
        case 1:
            luckyData="Tuesday";
            break;
        case 2:
            luckyData="Wednesday";
            break;
        case 3:
            luckyData="Thursday";
            break;
        case 4:
            luckyData="Friday";
            break;
        case 5:
            luckyData="Satrday";
            break;
        case 6:
            luckyData="Sunday";
            break;
    }
    return luckyData;
}
let dayVal = parseInt(prompt('\nPlease Enter the Number between 0 to 6 : '));
console.log("\nMy Lucky Day : " + checkLuckyDay(dayVal));
let newDat = parseInt(prompt('\nPlease Enter the Number : '));
console.log("\nMy Lucky Day : " + checkLuckyDay((newDat%7)));