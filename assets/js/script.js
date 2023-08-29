
let userScore = 0;
let computerScore = 0;
let userPlayed = "";
let computerPlayed = "";
let winner = "";

function computerPlay (){
    const items = Array("rock", "paper", "scissors");
    const item = items[Math.floor(Math.random()*items.length)];
    return item;
}


function userPlay(event){
    const buttonClicked = event.target;
    userPlayed = buttonClicked.id;
    computerPlayed = computerPlay();
    winner = checkWinner(computerPlayed, userPlayed);
    updateScreen();
}

function updateScreen(){
    document.getElementById('user-play').innerHTML = `User plays ${userPlayed}`;
    document.getElementById('computer-play').innerHTML = `Computer plays ${computerPlayed}`;
    document.getElementById('result').innerHTML = `Winner is ${winner}`;
    document.getElementById('score-user').innerHTML = userScore;
    document.getElementById('score-computer').innerHTML = computerScore;
}

function checkWinner(computerPlayed, userPlayed){
    document.getElementById('results-area').classList.remove('hide');
    if (userPlayed === "rock"){
        if (computerPlayed ==="rock"){
            return 'tie';
        }
        if (computerPlayed ==="paper"){
            computerScore = computerScore + 1;
            return 'computer';
        }
        if (computerPlayed ==="scissors"){
            userScore = userScore + 1;
            return 'user';
        }
    }
    if (userPlayed === "paper"){
        if (computerPlayed ==="rock"){
            userScore = userScore + 1;
            return 'user';
        }
        if (computerPlayed ==="paper"){
            return 'tie';
        }
        if (computerPlayed ==="scissors"){
            computerScore = computerScore + 1;
            return 'computer';
        }
    }
    if (userPlayed === "scissors"){
        if (computerPlayed ==="rock"){
            computerScore = computerScore + 1;
            return 'computer';
        }
        if (computerPlayed ==="paper"){
            userScore = userScore + 1;
            return 'user';
        }
        if (computerPlayed ==="scissors"){
            return 'tie';
        }
    }
}


const playButtons = document.getElementsByClassName('play');
for (var i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', userPlay);
 }



