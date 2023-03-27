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
class ChildUserStuDat extends StuTseAppCls
{
    chiAddress:string;
    constructor(empId:number,empName:string,empAge:number,chiAddress:string)
    {
        super(empId,empName,empAge);
        this.chiAddress=chiAddress;
    }

    getSpreadSum(a:number,b:number,...arr:number[]):number
    {
        let sum:number=0;
        for(let i=0;i<arr.length;i++)
        {
            sum=sum+a+b+arr[i];
        }
        return sum;
    }

    arrowData=(xd:number,yd:string,zd?:string):void=>
    {
      console.log("\nEmplyee Id : "+this.empId);
      console.log("\nEmplyee Name : "+this.empName);
      console.log("\nEmplyee Age : "+this.empAgeDt);
      console.log("\nEmplyee Address : "+this.chiAddress);
      console.log("\nChild Id : "+xd);
      console.log("\nChild yId : "+yd);
      if(zd!=undefined)
      {
        console.log("\nChild Address Data : "+zd);  
      }
    }

}
console.log("**************** calling chiild class object **************");
var chiObj=new ChildUserStuDat(1,"Atif As",39,"Chennai");
chiObj.arrowData(69,"Arrow Data2");
console.log("\nSum of Spreaded function : "+chiObj.getSpreadSum(10,20,30,230,304,3004,40,-2.44,0.99,3.00034));
chiObj.arrowData(69,"With optional Data","Hello Optional Data ..");