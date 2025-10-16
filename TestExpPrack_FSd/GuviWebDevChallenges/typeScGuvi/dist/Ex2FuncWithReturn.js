"use strict";
let weekDaysObj = {
    'moday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'Thursday': 4,
    'FriDay': 5,
    'SatDay': 6,
    'SunDay': 7
};
let resultIndex = (strInputWeek) => {
    return weekDaysObj[strInputWeek.toLowerCase().trim()];
};
console.log("\nThe Day number for the input WeekDay is : " + resultIndex('Wednesday') + "");
/**
 * Example of ...spread operator / Rest Paramethers
 *
 */
let sumOfInputArrayOfNumbers = (...args) => {
    return args.reduce((sum, num) => (sum + num), 0);
};
console.log("\nSum of numbers Set1 : " + sumOfInputArrayOfNumbers(3, 45, 5, 2, 4, 52, 0, 4, -4, 2) + "");
console.log("\nSum of numbers Set2 : " + sumOfInputArrayOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9) + "");
console.log("\nSum of numbers Set3 : " + sumOfInputArrayOfNumbers(0.5, 5, 5.004, 34, 45, -3.003) + "");
