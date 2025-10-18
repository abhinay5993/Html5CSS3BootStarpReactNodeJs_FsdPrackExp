/**
 * Example of Classes with access modifyers : 1.Public 2.Private 3.Protected.
 * 
 */
class EmployeeData {
    
    private _empId!: number;
    private _emailId!: string;
    private _empName: string;
    private _salary!: number;

    constructor(empId:number,emailId:string,empName:string,salary:number)
    {
    this._empId=empId;
    this._emailId=emailId;
    this._empName=empName;
    this._salary=salary;  
    }

       public get empId(): number {
        return this._empId;
    }

    public set empId(value: number) {
        this._empId = value;
    }
    
    public get emailId(): string {
        return this._emailId;
    }

    public set emailId(value: string) {
        this._emailId = value;
    }

    public get empName(): string {
        return this._empName;
    }

    public set empName(value: string) {
        this._empName = value;
    }
    
    public get salary(): number {
        return this._salary;
    }

    public set salary(value: number) {
        this._salary = value;
    }

}

let empObj:EmployeeData=new EmployeeData(501,"em3400@gmail.com","CartLane",500000);
console.log("\Object data : "+JSON.stringify(empObj));
console.log("\nValue of EmpName : "+empObj.empName);
console.log("\nValue of EmpEmailId : "+empObj.emailId);
empObj.empName="FreshWorks!..";
empObj.empId=1001;
console.log("\Object data : "+JSON.stringify(empObj));