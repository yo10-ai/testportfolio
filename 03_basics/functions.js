function loginmsg(username='sam'){
    if(!username){ //here an alternative way to (username===undefined)
        console.log("please enter a username");
        return;
    } else{
        return`${username}, hello there!
    `}    
}
// const name=loginmsg("yogesh");
// console.log(name);

console.log(loginmsg('trump'));

/*in case there are no arguments passed in to the execution of function then the output is undefined.*/

function pricecalculator(num1,num2,...numN){
    return numN;
}
console.log(pricecalculator(500,500,500));

/*objects and function interlinked*/
// const anobject={
// user:'yogesh',age:26
// }
function accessobject(somerandomvariable){
    return `The candidates name is ${somerandomvariable.user} and is of ${somerandomvariable.age} years old`
}
// console.log(accessobject(anobject));

/*in the above example its not necessary that an object is to declared first and then only passed onto as an arguement. We can directly input the object as an arguement to function without declaring it*/

console.log(accessobject({user:'yogesh',age:26}))

/********************function and arrays*******************************/

const anarray=[200,400,600,800,1000]
//the below function will need to access the second element of the array
function accessarray(radomarray){
return `the second element of the array is ${radomarray[2]}`
}
console.log(accessarray(anarray));