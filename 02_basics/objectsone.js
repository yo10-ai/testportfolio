//creating an object as a constructor
const newobject = new Object();
// console.log(newobject);

// const egobject = {}
// console.log(egobject);
/****************************************************/
newobject.username='aeroplane_23',
newobject.model='275trubojetkc09',
newobject.isnew=false

// console.log(newobject)
/****************************************************/

newobject.pilotinfo = {name:"prakash", onduty: false, age:29}
// console.log(newobject)

/************concating two objects into one */

const obj1={1:'a', 2:'b', 3:'c'}
const obj2={3:'d', 5:'e', 6:'f'}

const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);
/*********another way to merge the two objects***/
const obj={...obj1,...obj2};
// console.log(obj);

/************************destructuring of objects************/
const course={coursename:"learnjseasy", courseprice:9999, instructor:"hiteshbhaupatil"}

const {coursename: CN, courseprice: cp, instructor:ins} = course;

console.log(CN);