/*
This is Multiline Javascript Comments!!
Play with Dynamic logics of JS and fit them into HTML elements
Go with JS!!
*/
var num1=45.99
var num2=65.34
var sum=num1+num2
var sub=num1-num2
document.writeln("Sum is : "+sum)
document.writeln(" ")
document.writeln(`Difference value is : ${sub}`)
document.writeln(" ")
var max=`value ${ (num2>sum && num2>sub)?'num2 is grater':`${ (sum>sub)?'sum is grater':'sub is grater'}`}`
document.writeln(`${max}`)
document.getElementById('testId1').innerHTML=`Product of ${num1} and ${num2} is : ${num1*num2}`;