const jsuser={name:"yogesh", age:26, working:true};
/*ways to access a property are as belows*/
// console.log(jsuser.working);
//console.log(jsuser['working']);most used

const mysymbol = Symbol("key");

const symbolobject = {[mysymbol]:"key"}

// console.log(symbolobject[mysymbol]);

jsuser.myfunction= function(){
    console.log(`hellothere mr ${this.name}`);
    return ''};

console.log(jsuser.myfunction())