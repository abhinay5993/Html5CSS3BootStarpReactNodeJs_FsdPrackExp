"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stuObj = void 0;
let stuObj = {
    rollNo: 301,
    stuName: "Atif Aslam",
    dept: "Computer Science",
    getMarksCal: (...args) => {
        return args.reduce((sum, num) => (sum + num), 0);
    },
    totalMarks: 0,
};
exports.stuObj = stuObj;
console.log("\nComputed Marks : " + stuObj.getMarksCal(55, 34, 40, 90, 30));
stuObj.totalMarks = stuObj.getMarksCal(55, 34, 40, 90, 30);
console.log("\nObject without Optional Param : " + JSON.stringify(stuObj));
stuObj.grade = "A+";
stuObj.rollNo = 25;
stuObj.stuName = "Abhinay";
console.log("\nObject With Optional Param : " + JSON.stringify(stuObj));
