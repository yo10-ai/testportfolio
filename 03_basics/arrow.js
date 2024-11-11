const obj={
    user: "yogesh",
    age:26,
    welcomemessage: function(){
        console.log(`hey! hello there ${this.user}`)
        console.log(this)
    }
};
/*this keyword refers to current context*/
// obj.welcomemessage();
// obj.user='sam';
// obj.welcomemessage();
// console.log(this.obj)

/*when you try to execuete just this of a function*/

() => {
console.log(this)
}

// run();

const moon = (num1, num2)=>{
    return num1+num2
}

/*implicit return in arrow functions is as below */

const logic= (num1,num2)=>({user:"yogesh"})

console.log(logic(3,4));