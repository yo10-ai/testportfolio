/*basic for loop example*/
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
//     if(element ==5){
//         console.log('yayy!we have reached until level 5. All the best for next level')
//     }
// }

/*example of loop inside a loop*/
// for (let j=0; j<=10; j++){
//     for(let i=0; i<5; i++){
//         let innerloop=i;
//         console.log('innerloop');
//     }
//     let outerloop=j;
//     console.log('outerloop');
// }

/*for loop on an array*/
// let political_parties = ['congress','bjp','shivsena','trinmool','aamadmi','ncp']
// for (i=0;i<4;i++) {
//     let printparties=political_parties[i];
//     console.log(printparties);
// };

/*break and continue in for loop*/

// for (m=1;m<=20;m++){
//     if(m==5){
//         console.log('Detected 5');
//         break;
//     }
//     console.log(`the value of m is ${m}`);
// };

for (m=1;m<=20;m++){
    if(m==5){
        console.log('Detected 5');
        continue;
    }
    console.log(`the value of m is ${m}`);
};