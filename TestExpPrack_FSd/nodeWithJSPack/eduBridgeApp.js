a=90
function myFuncData()
{
    a=500
    //alert("Hello Dear from External JS--> !!.."+new Date())
    console.log("Inside of a : "+a);
}
//myFuncData();
console.log("OutSide of func : "+a);
function evenApp(num){
    var val=(num%2==0)?"even":"odd";
    console.log("status : "+val);
}
evenApp(31);

function findMaxNum(num1,num2,num3)
{
    if((num1>num2) && (num1>num3))
    {
        return num1;
    }
    else if(num2>num3)
    {
        return num2;
    }
    else
    {
        return num3;
    }

}
console.log("Max Num is : "+findMaxNum(12,40,400));
function toCheckSwitch(nDat)
{
    
    console.log("Val - "+typeof(nDat));
    switch(true)
    {
        case nDat>35 && nDat<30:
            console.log("Just Passed.");
            break;
        case nDat>40 && nDat<50:
                console.log("2nd Division.");
                break;
        case nDat>50 && nDat<60:
            console.log("1st Division.");
            break;
        default:
            console.log("Un-Known-Grade.");
    }
}
toCheckSwitch(36);

function printEvenNums()
{
    for(let x=1;x<=50;x++)
    {
      var evenNum=(x%2==0)?x:
      console.log("Even Nums - "+evenNum);  
    }
}
printEvenNums();

function printPrimeNums(numDat)
{
    var fg=true
    if(numDat>1)
    {
        for(let x=2;x<=numDat/2;x++)
        {
          if(numDat%x==0)
          {
            fg=false
          }
        }
        if(fg)
        {
           console.log(numDat+" is prime Num"); 
        }
        else{
            console.log(numDat+" is not prime Num"); 
        }
    }
    else
    {
     console.log("\n is not Prime Num");
    }
}
printPrimeNums(4);
console.clear;
function printWhileOddData(dat)
{
    let x=0;
    while(x<=dat)
    {
        if(x%2!=0)
        {
            console.log("While loops Odd : "+x)
        }
        x++;
    }
}
console.clear();
printWhileOddData(30);