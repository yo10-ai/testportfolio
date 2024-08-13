 //two ways of using typeof operator-----------//
const score = 33;
console.log(typeof score);
console.log(typeof(score));//printing as a method

//------Converting number to string and  vice-versa-------------------//
const scoreboard = '44abd';
console.log(typeof scoreboard);//string
let newscoreboard = Number(scoreboard);
console.log(typeof newscoreboard);//number
console.log(newscoreboard);//NaN

//---------null dataype conversion ------//
const play = null;
let newplay = Number(play);
console.log(newplay);//value would be zero 0

//----------undefined dataype conversion------//
const kite = undefined;
let newkite = Number(kite);
console.log(newkite);//value would be NaN

//------------boolean value--------//
const ball = true;//in case it was false
let newball = Number (ball);
console.log(newball);//1 (incase it was false the value would be 0)

//------Special  case----//
let game ="hello";
let newgame = Number(game);
console.log(newgame);//output would be NaN. Because the string "hello" does not represent a valid number






