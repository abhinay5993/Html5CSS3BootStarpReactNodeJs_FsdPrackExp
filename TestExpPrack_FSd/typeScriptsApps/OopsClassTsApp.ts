class StuTseAppCls
{
    empId:number;
    empName:string;
    empAgeDt:number;

    constructor(empId:number,empName:string,empAgeDt:number)
    {
        this.empId =empId;
        this.empName =empName;
        this.empAgeDt =empAgeDt;
    }

    dispOutData():void
    {
        console.log("\nEmp Id : "+this.empId);
        console.log("\nEmp Name : "+this.empName);
        console.log("\nEmp Age : "+this.empAgeDt);
    }
    
}
var stuObj=new StuTseAppCls(34, "TetsUser", 57);
console.log("\nCall Methode using Obj : "+stuObj.dispOutData());
var stuObj2=new StuTseAppCls(1, "CLS-User", 29);
stuObj2.dispOutData();
console.log("\nPrint Object data : "+stuObj2.empName);