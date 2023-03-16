export{}
function findMaxNum(num1:number, num2:number,num3:number):number
{
    let maxVal:number = (num1>num2 && num1>num3)?num1:(num2>num3)?num2:num3;
    return maxVal;
}
console.log("\nManium out of three : "+findMaxNum(110.399,3,39.884));