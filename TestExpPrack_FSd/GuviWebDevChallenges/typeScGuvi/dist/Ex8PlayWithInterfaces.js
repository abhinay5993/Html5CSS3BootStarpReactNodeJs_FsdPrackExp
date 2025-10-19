"use strict";
let dataItems = [
    { stuName: "Abhi", stuRoll: 5, subject: "Java", marks: 550 },
    { stuName: "Atif", stuRoll: 7, subject: "Python3", marks: 450 },
    { stuName: "Amsa", stuRoll: 25, subject: "J2SE", marks: 560 },
    { stuName: "Siva D", stuRoll: 16, subject: "J2EE", marks: 700 },
    { stuName: "Ramu", stuRoll: 20, subject: "ML", marks: 350 }
];
dataItems.filter(item => {
    if (item.stuName.startsWith("A")) {
        console.log("Filtered " + item.stuName + " , " + item.subject + " data.");
    }
});
