var StuTseAppCls = /** @class */ (function () {
    function StuTseAppCls(empId, empName, empAgeDt) {
        this.empId = empId;
        this.empName = empName;
        this.empAgeDt = empAgeDt;
    }
    StuTseAppCls.prototype.dispOutData = function () {
        console.log("\nEmp Id : " + this.empId);
        console.log("\nEmp Name : " + this.empName);
        console.log("\nEmp Age : " + this.empAgeDt);
    };
    return StuTseAppCls;
}());
var stuObj = new StuTseAppCls(34, "TetsUser", 57);
console.log("\nCall Methode using Obj : " + stuObj.dispOutData());
var stuObj2 = new StuTseAppCls(1, "CLS-User", 29);
stuObj2.dispOutData();
console.log("\nPrint Object data : " + stuObj2.empName);
