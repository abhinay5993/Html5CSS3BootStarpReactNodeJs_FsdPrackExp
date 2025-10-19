/**
 * Object creation through interface with optional properties.
 * 
 */
interface IStudent {
    rollNo:number;
    stuName:string;
    dept:string;
    getMarksCal:(...args:number[])=>number;
    totalMarks:number;
    grade?:string;
}

let stuObj:IStudent = {
    rollNo: 301,
    stuName: "Atif Aslam",
    dept: "Computer Science",
    getMarksCal: (...args:number[]):number=>{
        return args.reduce((sum,num)=>(sum+num),0);
    },
    totalMarks:0,
};
console.log("\nComputed Marks : "+stuObj.getMarksCal(55,34,40,90,30));
stuObj.totalMarks=stuObj.getMarksCal(55,34,40,90,30);
console.log("\nObject without Optional Param : "+JSON.stringify(stuObj));
stuObj.grade="A+";
stuObj.rollNo=25;
stuObj.stuName="Abhinay";
console.log("\nObject With Optional Param : "+JSON.stringify(stuObj));

export { stuObj };