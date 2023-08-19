
let userScore = 0;
let computerScore = 0;
let userPlayed = "";
let computerPlayed = "";
let winner = "";

function computerPlay (){
    const items = Array("rock", "paper", "scissors");
    const item = items[Math.floor(Math.random()*items.length)];
    console.log(`computer plays ${item}`);
    return item;
}


function userPlay(event){
    const buttonClicked = event.target;
    console.log(`User plays ${buttonClicked.id}`);
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
    if (userPlayed === "rock"){
        if (computerPlayed ==="rock"){
            console.log("Its a tie");
            return 'tie';
        }
        if (computerPlayed ==="paper"){
            console.log("Computer wins");
            computerScore = computerScore + 1;
            return 'computer';
        }
        if (computerPlayed ==="scissors"){
            console.log("User wins");
            userScore = userScore + 1;
            return 'user';
        }
    }
    if (userPlayed === "paper"){
        if (computerPlayed ==="rock"){
            console.log("User wins");
            userScore = userScore + 1;
            return 'user';
        }
        if (computerPlayed ==="paper"){
            console.log("Its a tie");
            return 'tie';
        }
        if (computerPlayed ==="scissors"){
            console.log("Computer wins");
            computerScore = computerScore + 1;
            return 'computer';
        }
    }
    if (userPlayed === "scissors"){
        if (computerPlayed ==="rock"){
            console.log("Computer wins");
            computerScore = computerScore + 1;
            return 'computer';
        }
        if (computerPlayed ==="paper"){
            console.log("User wins");
            userScore = userScore + 1;
            return 'user';
        }
        if (computerPlayed ==="scissors"){
            console.log("Its a tie");
            return 'tie';
        }
    }
}


const playButtons = document.getElementsByClassName('play');
for (var i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', userPlay);
 }



