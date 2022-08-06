const stuNameList=['Al','QA_Automation','SDET','App Team',4005.4993,-30.343,0.999]
for(let x of stuNameList)
{
    console.log("Data from List : "+x);
}

//without rest params
const sample=(a,b,c) => {
    console.log("without rest params Sample data : "+a+" ==> "+b+" ==> "+c+" ");
}
console.log(sample(10,30,-4.344));

//with rest params
const sample1=(a,b,c,...n) => {
    console.log("with rest params "+a+" ==> "+b+" ==> "+c+" "+n);
}
console.log(sample1(10,30,-4.344,"Kkaa",0.00033,64));

//only rest params
const sample2=(...n) => {
    console.log("only rest params "+a+" ==> "+b+" ==> "+c+" "+n);
}
console.log(sample1(5,90,23));