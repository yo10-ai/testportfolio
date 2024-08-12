//almost never use var as a keyword to declare a variable due to issue in blockscope and functional scope
const accountId = 936790;
let accountName = 'yogesh';
var accountEmail = 'yg78534@gmail.com';
accountCity = 'Pune';//can declare a variable without using any keyword
let accountState;
console.table([accountId,accountName,accountEmail,accountCity, accountState]);
//code readability is of utmost importance
const myInt = 5;
const myFloat = 14.4;
console.log(typeof myInt);
console.log(typeof myFloat);
console.log(typeof undefined);//undefined
console.log(typeof null);//object