class PersonCls
{
    public fstName: string;
    public lstName: string;
    constructor(fstName: string, lstName: string)
    {
    this.fstName=fstName;
    this.lstName=lstName;
    }
}

const per1Obj:PersonCls=new PersonCls("Atif","Aslam app");
console.log(per1Obj);
console.log("Person obj : "+per1Obj.fstName);
console.log("Person obj : "+per1Obj.lstName);
window.alert(per1Obj.fstName as string+" "+per1Obj.lstName as string+" ");