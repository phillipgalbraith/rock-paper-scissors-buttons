
//Declare Variable score to store the wins, default zero (0)
let score = 0;
// and the rounds played
let rounds = 0;
// thirdly, the results of a round is a string
let results = "";

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

//Delare FUNCTION playRound (playerSelection, computerSelection)
function playRound(playerSelection, computerSelection) {
if (rounds > 4) {rounds = 0; score = 0};
//count this round
 rounds = ++rounds
    //player Loss
    if (playerSelection == "Rock" && computerSelection == "Paper") { 
      results = "You Lose! Paper beats Rock";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") { 
      results =  "You Lose! Rock beats Scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      results = "You Lose! Scissors beats Paper";


    //player Win
    } else if (playerSelection == "Paper" && computerSelection == "Rock") { 
      results = "You Win the Round! Paper beats Rock";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") { 
      results = "You Win the Round! Scissors beats Paper";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") { 
      results = "You Win the Round! Rock beats Scissors";

      //player Tie 
    } else {
      results = ("It's a Tie! Both chose " + playerSelection + "!");
      //and it's a do over
      rounds = --rounds;
    }

      //player scores on a Win
    if (results > "You Win") { 
      score = ++score;        
    }
   return [score,rounds,results];
  }






// remove the content of the divs and replace it with information 
//    from the array output of playRound() 
function updateDisplay(displayArray) {

  //select div for results
  const displayResults = document.querySelector('#displayResults'); //select div for results
  //clear it out
  displayResults.removeChild(displayResults.firstElementChild);
 //add the new results
  const newDivResults = document.createElement('div');
  newDivResults.classList.add('divResults');
  newDivResults.style.color = 'blue';    
  newDivResults.textContent = displayArray[2];
  displayResults.appendChild(newDivResults);

//select div for score
  const currentScore = document.querySelector('#currentScore'); //select div for score
  //clear it out  
  currentScore.removeChild(currentScore.firstElementChild);
   //add the new results
  const newScoreRounds = document.createElement('div');
  newScoreRounds.classList.add('scoreRounds');
  newScoreRounds.style.color = 'green';
  newScoreRounds.textContent = (displayArray[0] + '/' + displayArray[1]);
  currentScore.appendChild(newScoreRounds);

  if (displayArray[1] === 1) {
    const winner = document.querySelector('#winner'); //select div for score
    //clear it out
    winner.removeChild(winner.firstElementChild);

    const newWhoWon = document.createElement('div');
    newWhoWon.classList.add('whoWon');
    newWhoWon.fontSize = '12px';
    newWhoWon.textContent = "Who will be the Champion of five rounds?";
    winner.appendChild(newWhoWon);
  };
  
  if (displayArray[1] > 4) {
    const winner = document.querySelector('#winner'); //select div for score
    //clear it out
    winner.removeChild(winner.firstElementChild);
    const newWhoWon = document.createElement('div');
    newWhoWon.fontSize = '20px';
    newWhoWon.classList.add('whoWon');
    if (displayArray[0] > 2){
      newWhoWon.textContent = "You are the Champion!";
    } else {
      newWhoWon.textContent = "You were Defeated";
    };
    winner.appendChild(newWhoWon);
  };
  
};
//




//make a node list called buttons (all of the element button)
const buttons = document.querySelectorAll('button');

//iterate through each button with method .forEach 
buttons.forEach((button) => {

    // to give each button(no 's') gets a click listener
    button.addEventListener('click', () => {
      updateDisplay(playRound(button.id, computerPlay()));
      
    });
  });
  
