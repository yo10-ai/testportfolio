/*array specific loops*/
// let example=['1',2,'3',4,'5'];
// for (let propertym of example){
//     console.log(propertym);
// }

/*for..of loop on a string */
//const greetings='Hello World';
// for(const greet of greetings){
//     console.log(greet);
//     if(greet==' '){
//         console.log('detected a space in variable please submit it without space')
//         break;
//     }
//     // console.log(greet);
// }//

/*MAP object*/

const map_example = new Map();
map_example.set('COG',"cognizant");
map_example.set('INFY','INFOSYS');
map_example.set('CAPG','CAPGEMINI');
map_example.set('COG',"COGNISANCE");
// console.log(map_example);
/*for..of loop on a MAP*//*below example is to print keys and valueS of MAP by destructuring the array format output*/
// for(const [maps, mapss] of map_example){console.log(maps, ':', mapss)}
/*for..of loop on a simple object*/
const obj_eg={'name':'yogesh','age':26,'id':936790}
// for (const details of obj_eg){console.log(details)}//o/p is an error because the for..of loop is not designed to be used on simple objects but on iterable objects such as arrays,strings,maps,sets and other data structures that implement the iterable protocol
/*to use for..of loop on an simple object there's an indirect way to access the properties individually with just keys or values alone*/
// for(const entry of Object.entries(obj_eg)){console.log(entry)}

/*there's for..in loop for simple object.*/
let states = {"mh":'maharashtra','raj':'rajasthan','gj':'gujarat'}
for(let state in states){
    // console.log(states[state]);
    // console.log(`${state} is short for ${states[state]}`)
}

/*trying for..in loop on an array*/

let another_array=['hello!','how','are','you','doing','?']
for(let arr in another_array){
    // console.log(another_array[arr]);
}

/*for..in loop for map */
let loop_on_map = new Map();
loop_on_map.set("name","Yogesh")
loop_on_map.set("age",26)
loop_on_map.set("designation","Jr. Software developer")

for(let [formap, formap1] in loop_on_map){
    // console.log([formap, formap1]); not possible because in general map is not iterable
}

/*callback function*/
let anarray = ['developer','tester','infra-engineer'];

anarray.forEach(function (role){
    // console.log(role)
});

let project_idea = ['integrations','development','data-analytics'];
// project_idea.forEach((item)=>{console.log(item)})

function printMe(value=3){
    // console.log(value);
}

project_idea.forEach(printMe);

/********************************************/

const filenames = [
    {
        'fileone':'taxation24',
        'version':'1'
    },
    {
        'fileone':'taxation23',
        'version':'1.5'
    },
    {
        'fileone':'taxation22',
        'version':'1.3'
    }
]

filenames.forEach((namesofile)=>{
    console.log(namesofile.version);
})