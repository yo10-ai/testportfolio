function myName(){
    console.log("Y"),console.log("O"),console.log("G"),console.log("E"),console.log("S"),console.log("H")
}
//when you only type in the name of function without the parantheses its called reference to the function as below
myName
//when you want to execute a function you need to add the parantheses after its name as below
// myName();

//adding two numbers

function addTwonumbers(num1,num2){
console.log(num1+num2);
}
// addTwonumbers(0,0);//with no paramteres inside the parantheses the output would be NaN

/*whenever you input any stuff into bracket while the function definition that stuff is called parameters and when you input any stuff into bracket while executing the function then it is called as arguement*/

/*other ways to write a function*/
function addnums(n1,n2){
    let result = n1+n2;
    return result
}
const outsideresult= addnums(5,5);
// console.log("The result of the function is:",outsideresult);

function addnumsone(n1,n2){
    return n1+n2;
}
const or=addnumsone(99,1)
console.log("result is",or);