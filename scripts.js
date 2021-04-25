
//Declare Variable score to store the wins, default zero (0)
let score = 0;
//Declare FUNCTION computerPlay Parameters:(none)
function computerPlay() {
//computerSelector takes one of three random values: = Randomly select 0,1,2  
    x = Math.floor(Math.random() * 3);
// IF computerSelector = 0
    if (x == 0) {
  //   THEN computerSelection = "Rock"
    return "Rock";
// IF computerSelector = 1
    } else if (x == 1){
 //      THEN computerSelection = "Paper"
     return "Paper";
//IF computerSelector = 2
    } else {
  //  THEN computerSelection = "Scissors"
      return "Scissors";
    }
//END
}

//Delare FUNCTION playOneRound (playerSelection, computerSelection)
function playOneRound(playerSelection, computerSelection) {
//  Firstly make playerSelection case-insensitive
  //    use Slice to put the first letter in a Variable
      //  toUpperCase the first letter
    // I made this for another exercise
  initialLetter = playerSelection.slice(0,1);
  capitalizedInitial = initialLetter.toUpperCase();
  noInitial = playerSelection.slice(1);
  lowerCaseWhatsLeft = noInitial.toLowerCase(noInitial);
  playerSelection = capitalizedInitial + lowerCaseWhatsLeft;
// Give an error message or require a incorrect response
    //IF playerSelection != Rock and playerSelection != Paper and playerSelection != Scissors
    if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
      //  THEN Prompt "No, Really, Rock, Paper or Scissors?"
      return ("You Lose! " + computerSelection + " beats your answer. Check your spelling next time");
    //ELSE IF playerSelection is Rock and computerSelection is Paper
    } else if (playerSelection == "Rock" && computerSelection == "Paper") { 
    //  THEN winOrLose = ("You Lose! Paper beats Rock")
      return "You Lose! Paper beats Rock";
    //ELSE IF playerSelection is Scissors and computerSelection is Rock
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") { 
    //  THEN winOrLose = ("You Lose! Rock beats Scissors")
      return "You Lose! Rock beats Scissors";
    //ELSE IF playerSelection is Paper and computerSelection is Scissors
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") { 
      //  THEN winOrLose = ("You Lose! Scissors beats Paper")
      return "You Lose! Scissors beats Paper";
    //ELSE IF playerSelection is Paper and computerSelection is Rock
    } else if (playerSelection == "Paper" && computerSelection == "Rock") { 
      //  THEN winOrLose = ("You Win! Paper beats Rock")
      return "You Win! Paper beats Rock";
    //ELSE IF playerSelection is Scissors and computerSelection is Paper
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") { 
      //  THEN winOrLose = ("You Win! Scissors beats Paper")
      return "You Win! Scissors beats Paper";
    //ELSE IF playerSelection is Rock and computerSelection is Scissors
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") { 
      //  THEN winOrLose = ("You Win! Rock beats Scissors")
      return "You Win! Rock beats Scissors";
    //ELSE  winOrLose = ("It's a Tie! Both chose " + player Selection + "!")
    } else {
      return  ("It's a Tie! Both chose " + playerSelection + "!");
    //  ;
    }
   //End 
   }




   //   5 times Do This
i = 0;
while (i < 5) {  // 5 iterations, i = 0,1,2,3,4 that's five!
  //New variable: get player Selection string argument for playOneRound using a prompt
    let playerSelection = prompt("Rock, Paper, Scissors: shoot!", "Rock");
  //New variable: computerSelection string argument for playOneRound 
    let computerSelection = computerPlay(); 
  // playOneRound(playerSelection, computerSelection);
    let winOrLose = playOneRound(playerSelection, computerSelection);
   // IF winOrLose > "You Win"
    if (winOrLose > "You Win") { 
   //     THEN score = ++score    ......ADD one to the Variable score's value;
    score = ++score;        
    }
       // alert(winOrLose + "Your Score: " + score)  .....tell the result
       alert(winOrLose + ". Your Score: " + score + "/5")
   i++; //step up to the next iteration
}


