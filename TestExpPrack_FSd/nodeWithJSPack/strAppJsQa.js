//String with Literals:
var st="Welcome to JS";
for(let l=0;l<st.length;l++)
{
    console.log("\nchar at data : "+st.charAt(l));
}

console.log("\nSplit Dta : "+st.split(""));

let dt=new String(new Date());
// console.log("\nDate Obj : "+dt.getDay());
// console.log("\nDate Obj Year : "+dt.getFullYear());
// console.log("\nDate Obj Time : "+dt.getTime());
console.log("\nAfter Spliting on String : "+dt.split(" ")[1]);