var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log(`Welocme ${userName}`);
let score=0;
function play(question,answer)
{
let userAnswer=readlineSync.question(question);
if(userAnswer===answer)
{
  score++;
  console.log("Correct");
 }
else
{
  console.log("Wrong");
}
console.log(`Score ${score}`);
console.log("------------------")
}
const questionslist=[{
question:"How many maps are there in PUBG ",
answer:"4"
},
{
question:"Maximum level of PUBG backpack ",
answer:"3"
},
{
question:"Maximum number of players that can play in a match ",
answer:"100"
},
{
question:"Maximum scope range for AR in PUBG ",
answer:" 6x"
},
{
question:"Creator of PUBG ",
answer:"Brendan Greene"
}];
for(let i=0;i<questionslist.length;i++)
{
play(questionslist[i].question,questionslist[i].answer);
}
console.log("Quiz Complete");
console.log(`Your Total Score is ${score}`);
