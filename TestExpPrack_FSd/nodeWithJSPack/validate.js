// function regValidation() {
//     var uname = document.stuRegisterForm.username.value;
//     var pwd = document.stuRegisterForm.password.value;
//     console.log("userName value : " + uname);
//     console.log("password value : " + pwd);
//     if (uname == "" || pwd == "") {
//         alert("please enter " + uname + " or " + pwd + " is empty");
//         return false;
//     }
//     return true;
// }

// function increseCounter() {
//     var cot=0;
//     cot++;
//     document.getElementById("counter").innerHTML = cot;
// }

// function resetCounter() {
//     document.getElementById("counter").innerHTML = 0;
// }

// function evenApp(num){
//     var val=(num%2==0)?"even":"odd";
//     document.write("<br>Passed input : "+num+" Number is : "+val);
// }

function salCal(da,hra,basic){
    let sal=(da+hra+basic)-(basic/10);
    return sal;
}
//document.write("<br>Passed Salary : <br>"+salCal(da,hra,basic));

let datAno=(a,b)=>{
    return (a*a)+(b*b);
}
console.log("\nCall Annonimus func : "+datAno(2,3));
stu={dateAt:"05-09-1993","test":"mesg Al",app5:"sjjdsjd",datAno:{dat1:"kk",dat2:-304994}};
console.log("\nGet Object Dta :"+stu.test);
console.log("\nGet Object Date :"+stu.datAno.dat2);

var stuWithObj=new Object();
stuWithObj.key1=50
stuWithObj.key2=-203.0034
stuWithObj.key3="testing with Object()"
stuWithObj.key4=-0.99
console.log("Play with Object() : "+stuWithObj.key4);
console.log("Create Object using function constructor :");
function consFunc(eId,eName,eAdd)
{
    this.eId=eId;
    this.eName=eName;
    this.eAdd=eAdd;
    console.log("After func constructor");
}

e1Obj=new consFunc(202,"AbhinayL",-3049);
e1Obj1=new consFunc(20,"aitf","KNK,Chennai");

console.log("Object of 2nd employee : "+e1Obj1.eName);
console.log("Full object Object of 1st employee : "+e1Obj.eAdd);