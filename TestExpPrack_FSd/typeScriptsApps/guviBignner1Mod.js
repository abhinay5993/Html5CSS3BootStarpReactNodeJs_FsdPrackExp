var PersonCls = /** @class */ (function () {
    function PersonCls(fstName, lstName) {
        this.fstName = fstName;
        this.lstName = lstName;
    }
    return PersonCls;
}());
var per1Obj = new PersonCls("Atif", "Aslam app");
console.log(per1Obj);
console.log("Person obj : " + per1Obj.fstName);
console.log("Person obj : " + per1Obj.lstName);
window.alert(per1Obj.fstName + " " + per1Obj.lstName + " ");
