var a=200;

// if(10){
//     var a=10;
//     console.log("Inner:",a)
// }
// console.log(a);

/****************Nested functions *************/

function one(){
    const username="yogesh";

    function two(){
        const website="Linkedin.com"
        console.log(username);
    }
    // console.log(website);
    // two();
}
one();

/*Explaination for above piece of code: When website is consoled it throws an error and hence rest of the code is not executed. 2) once the website console is commented the function two() is executed with printing of console statement inside it which was accessing username that was declared in the scope of function one ( in lay-man's language a smaller function "in this case function two()" can access contents within a larger function "in this case function one()" than it but vice-versa is not possible )*/

/*88888888888888888888888888888888888888888888888888888888*/

if(true){
    const username="yogesh";
    if(username==="yogesh"){
        const website="google.com";
        // console.log(username+website);
        // console.log(website);
    }
    // 
    // console.log(username)
}
//------ways to declare a function and its effect---------------------------------------//

function exampleone(num){
    return num+1;
}
// exampleone(5);

exampletwo(6)
const vscode=function exampletwo(num){
    return num+2;
}

