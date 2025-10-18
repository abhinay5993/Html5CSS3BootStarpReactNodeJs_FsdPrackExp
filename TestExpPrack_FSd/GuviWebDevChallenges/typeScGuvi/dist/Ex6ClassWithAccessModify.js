"use strict";
/**
 * Example of Classes with access modifyers : 1.Public 2.Private 3.Protected.
 *
 */
class EmployeeData {
    constructor(empId, emailId, empName, salary) {
        this._empId = empId;
        this._emailId = emailId;
        this._empName = empName;
        this._salary = salary;
    }
    get empId() {
        return this._empId;
    }
    set empId(value) {
        this._empId = value;
    }
    get emailId() {
        return this._emailId;
    }
    set emailId(value) {
        this._emailId = value;
    }
    get empName() {
        return this._empName;
    }
    set empName(value) {
        this._empName = value;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        this._salary = value;
    }
}
let empObj = new EmployeeData(501, "em3400@gmail.com", "CartLane", 500000);
console.log("\Object data : " + JSON.stringify(empObj));
console.log("\nValue of EmpName : " + empObj.empName);
console.log("\nValue of EmpEmailId : " + empObj.emailId);
empObj.empName = "FreshWorks!..";
empObj.empId = 1001;
console.log("\Object data : " + JSON.stringify(empObj));
