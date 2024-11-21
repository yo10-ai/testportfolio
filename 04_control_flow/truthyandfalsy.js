//when you do not use any comparison operators and still use a variables value inside an if and else statement then that is truthy or falsy situation//
// const email=[];
// if(email.length==0){console.log("Please input a valid email id")}else{console.log("User does not have an email")};
//there are some falsy values as below//
//false, 0, -0, BigInt 0n, undefined, null, '', NaN
//there are some truthy values as below//
//true, [], '0', " " (string with a space),{},function(){}
const example={}
// if(Object.keys(example).length==0){
//     console.log('its an empty function')
// }
// else{
//     console.log("not an empty function")
// }

//Nullish coalescing operator (??) a bit complex /* everything is dependant on 'null' and 'undefined'*/

let esspressoprice='100';
esspressoprice >100?console.log('coffee is pricey'):console.log("coffee is cheap");