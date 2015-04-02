//buttons
var rockButton = $('.choice-rock'); //$('.class')
var paperButton = $('.choice-paper'); //$('.class')
var scissorButton = $('.choice-scissors'); //$('.class')
var body = $('.main');

//choices
var playerChoice = '';
var computerChoice = '';
var playerChoiceElement = $('.player-choice');
var computerChoiceElement = $('.computer-choice');
var winningElement = $('.results-final');


//score
var playerScore = 0;
var computerScore = 0;

var playerScoreElement = $('.score-player');
var computerScoreElement = $('.score-computer');

rockButton.on('click', function() {
	console.log('I picked rock!');
	playerChoice = 'Rock';
	playerChoiceElement.text('Rock');
	computerChoiceElement.text(computerChoice);
	makeComputerChoice();
	determineWinner();
});

paperButton.on('click', function() {
	console.log('I picked paper!');
	playerChoice = 'Paper';
	playerChoiceElement.text('Paper');
	computerChoiceElement.text(computerChoice);
	makeComputerChoice();
	determineWinner();
});

scissorButton.on('click', function() {
	console.log('I picked scissors!');
	playerChoice = 'Scissors';
	playerChoiceElement.text('Scissors');
	computerChoiceElement.text(computerChoice);
	makeComputerChoice();
	determineWinner();
});

function makeComputerChoice() {
	var randomNumber = Math.random();
	
	if(randomNumber == .666){
		body.text('');
		body.append("<img id='image' src='Devil.gif'/>");
	} else if(randomNumber < 0.333){
		computerChoice = 'Rock';
	} else if (randomNumber > 0.333 && randomNumber < 0.666){
		computerChoice = 'Paper';
	} else if (randomNumber > .666) {
		computerChoice = 'Scissors';
	} 

	console.log(randomNumber + ':' + computerChoice);
};

function determineWinner() {
	console.log(playerChoice + '|' + computerChoice);
	//tie
	if (playerChoice === computerChoice){
		console.log('tie');
		winningElement.text('Tie!');
	}

	//player picks rock
	if (playerChoice === 'Rock'){
		if(computerChoice === 'Paper'){
			console.log('computer wins');
			winningElement.text('Computer Wins!');
			computerScore += 1;
		}
		else if(computerChoice === 'Scissors'){
			console.log('player wins');
			winningElement.text('Player Wins!');
			playerScore += 1;
		}
	}

	//player picks paper
	if (playerChoice === 'Paper'){
		if(computerChoice === 'Rock'){
			console.log('player wins');
			winningElement.text('Player Wins');
			playerScore += 1;
		}
		else if(computerChoice === 'Scissors');
			console.log('computer wins!')
			winningElement.text('Computer Wins!');
			computerScore += 1
	}

	//player picks scissors
	if (playerChoice === 'Scissors'){
		if(computerChoice === 'Paper'){
			console.log('player wins');
			winningElement.text('Player Wins!');
			playerScore += 1;
		}
		else if(computerChoice === 'Rock');
			console.log('Computer Wins');
			winningElement.text('Computer Wins!');
			computerScore += 1;
	}

	playerScoreElement.text(playerScore);
	computerScoreElement.text(computerScore);	
};


