var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ChildUserStuDat = /** @class */ (function (_super) {
    __extends(ChildUserStuDat, _super);
    function ChildUserStuDat(empId, empName, empAge, chiAddress) {
        var _this = _super.call(this, empId, empName, empAge) || this;
        _this.arrowData = function (xd, yd, zd) {
            console.log("\nEmplyee Id : " + _this.empId);
            console.log("\nEmplyee Name : " + _this.empName);
            console.log("\nEmplyee Age : " + _this.empAgeDt);
            console.log("\nEmplyee Address : " + _this.chiAddress);
            console.log("\nChild Id : " + xd);
            console.log("\nChild yId : " + yd);
            if (zd != undefined) {
                console.log("\nChild Address Data : " + zd);
            }
        };
        _this.chiAddress = chiAddress;
        return _this;
    }
    ChildUserStuDat.prototype.getSpreadSum = function (a, b) {
        var arr = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            arr[_i - 2] = arguments[_i];
        }
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum = sum + a + b + arr[i];
        }
        return sum;
    };
    return ChildUserStuDat;
}(StuTseAppCls));
console.log("**************** calling chiild class object **************");
var chiObj = new ChildUserStuDat(1, "Atif As", 39, "Chennai");
chiObj.arrowData(69, "Arrow Data2");
console.log("\nSum of Spreaded function : " + chiObj.getSpreadSum(10, 20, 30, 230, 304, 3004, 40, -2.44, 0.99, 3.00034));
chiObj.arrowData(69, "With optional Data", "Hello Optional Data ..");
