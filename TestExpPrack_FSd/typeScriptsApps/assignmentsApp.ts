export{}
// import readline module
const prompt = require('prompt-sync')()

function computeReversalOfStrWithCount(inpx:string):string
{
    let temStr:string="";
    for(let x=inpx.length-1;x>=0;x--)
    {
        temStr=temStr+inpx[x];
    }
    let newStr=inpx+temStr;
    let resStr=newStr+newStr.length;
    return resStr;
}
let strx=prompt('\nPlease Enter the String : ');
console.log("\nOutPut data : "+computeReversalOfStrWithCount(strx));