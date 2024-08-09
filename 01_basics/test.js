//almost never use var as a keyword to declare a variable due to issue in blockscope and functional scope
const accountId = 936790;
let accountName = 'yogesh';
var accountEmail = 'yg78534@gmail.com';
accountCity = 'Pune';//can declare a variable without using any keyword
let accountState;
console.table([accountId,accountName,accountEmail,accountCity, accountState]);