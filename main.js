/*global variable*/
var xScore = 0;
var oScore = 0;
var turn = 0; /*0 == computer turn, 1 = user turn*/
var gameOn = false; /*true is game going on*/
var twoPlayers = false;
var timer;
var secondsRemaining = 9;
var firstComputerMove = true;


let unusedTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9]; /*List of unused tiles, shrinks as game goes on*/
var flags = [0, 0, 0, 0, 0, 0, 0, 0, 0]; /* open, not in use. 1 or 2 => in use cannot put xo in there*/

const winConditions = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    var newGameAI = document.getElementById("newGameAI");
    newGameAI.addEventListener("click", newGame, false);
    newGameAI.parameter = false;

    var newGame2Players = document.getElementById("newGame2Players");
    newGame2Players.addEventListener("click", newGame, false);
    newGame2Players.parameter = true;

    document.getElementById("reset").addEventListener("click", resetAll, false);
})

function getRandomIntBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function resetBoardLayout() { 
    if (!gameOn) {
        unusedTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        flags = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        document.getElementById("whosTurn").innerHTML = `<span class="display_player">Click on a button below to start a game.</span>`;
        document.getElementById("timer-alert").innerHTML = "";

        document.getElementById("one").innerHTML = "";
        document.getElementById("two").innerHTML = "";
        document.getElementById("three").innerHTML = "";
        document.getElementById("four").innerHTML = "";
        document.getElementById("five").innerHTML = "";
        document.getElementById("six").innerHTML = "";
        document.getElementById("seven").innerHTML = "";
        document.getElementById("eight").innerHTML = "";
        document.getElementById("nine").innerHTML = "";
    }
}

function resetScores() {
    xScore = 0;
    oScore = 0;
    document.getElementById("scores").innerHTML = `<span class="display_player">X: ${xScore} | O: ${oScore}</span>`;
}

function resetAll() {
    resetBoardLayout();
    resetScores();
}

function newGame(button){
    /*when clicked starts the game/new game*/
    if (!gameOn) {
        resetBoardLayout();
        turn = 0;
        gameOn = true;
        secondsRemaining = 9;
        firstComputerMove = true;

        console.log("Started new game");
        document.getElementById("timer-alert").innerHTML = "Seconds to make a move: 5";

        twoPlayers = button.currentTarget.parameter;
        
        if (!twoPlayers) {
            againstComputer();
        }
        else{
            document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, X.</span>`;
            timer = setInterval(timerFunction, 500);
        }
    }
}

function timerFunction() {
    if (gameOn) {
        if ((secondsRemaining / 2) % 1 == 0) {
            document.getElementById("timer-alert").innerHTML = "Seconds to make a move: " + (secondsRemaining / 2);
        }

        secondsRemaining -= 1;

        if (secondsRemaining <= 0) {
            secondsRemaining = 10;

            if (gameOn) {
                if (twoPlayers) {
                    if (turn == 0) {
                        turn = 1;
                        document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, O.</span>`;
                    }
                    else {
                        turn = 0;
                        document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, X.</span>`;
                    }
                }
                else {
                    if (turn == 1) {
                        turn = 0;
                        againstComputer();
                    }
                }
            }
            else {
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Click on a button below to start a game.</span>`;
                document.getElementById("timer-alert").innerHTML = "";
            }
        }
    }
    else {
        document.getElementById("whosTurn").innerHTML = `<span class="display_player">Click on a button below to start a game.</span>`;
        document.getElementById("timer-alert").innerHTML = "";
    }
}

function againstComputer(){
    if (!twoPlayers && gameOn) {
        let randomIndex = getRandomIntBetween(0, unusedTiles.length - 1);
        let computerChoice = unusedTiles[randomIndex];

        if(computerChoice == 1) {
            one.call();
        }
        else if(computerChoice == 2) {
            two.call();
        }
        else if(computerChoice == 3) {
            three.call();
        }
        else if(computerChoice == 4) {
            four.call();
        }
        else if(computerChoice == 5) {
            five.call();
        }
        else if(computerChoice == 6) {
            six.call();
        }else if(computerChoice == 7)
        {
            seven.call();
        }
        else if(computerChoice == 8) {
            eight.call();
        }
        else if(computerChoice == 9) {
            nine.call();
        }

        turn = 1;

        if (firstComputerMove) {
            timer = setInterval(timerFunction, 500);
            firstComputerMove = false;
        }
        else {
            secondsRemaining = 10;
        }

        document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, O.</span>`;
    }
}


/*functions to write O for user*/
function userOne() {
    if (gameOn && flags[0] == 0) {
        if (twoPlayers) {
            
            secondsRemaining = 10;
            one.call();
    
            if (turn == 0) {
                turn = 1;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, O.</span>`;
            }
            else {
                turn = 0;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, X.</span>`;
            }
        }
        else {
            if (turn == 1) {
                one.call();
                turn = 0;
                againstComputer();
            }
        }
    }
}

function userTwo() {
    if (gameOn && flags[1] == 0) {
        if (twoPlayers) {
            
            secondsRemaining = 10;
            two.call();
    
            if (turn == 0) {
                turn = 1;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, O.</span>`;
            }
            else {
                turn = 0;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, X.</span>`;
            }
        }
        else {
            if (turn == 1) {
                two.call();
                turn = 0;
                againstComputer();
            }
        }
    }
}

function userThree() {
    if (gameOn && flags[2] == 0) {
        if (twoPlayers) {
            
            secondsRemaining = 10;
            three.call();
    
            if (turn == 0) {
                turn = 1;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, O.</span>`;
            }
            else {
                turn = 0;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, X.</span>`;
            }
        }
        else {
            if (turn == 1) {
                three.call();
                turn = 0;
                againstComputer();
            }
        }
    }
}

function userFour() {
    if (gameOn && flags[3] == 0) {
        if (twoPlayers) {
            
            secondsRemaining = 10;
            four.call();
    
            if (turn == 0) {
                turn = 1;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, O.</span>`;
            }
            else {
                turn = 0;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, X.</span>`;
            }
        }
        else {
            if (turn == 1) {
                four.call();
                turn = 0;
                againstComputer();
            }
        }
    }
}

function userFive() {
    if (gameOn && flags[4] == 0) {
        if (twoPlayers) {
            
            secondsRemaining = 10;
            five.call();
    
            if (turn == 0) {
                turn = 1;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, O.</span>`;
            }
            else {
                turn = 0;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, X.</span>`;
            }
        }
        else {
            if (turn == 1) {
                five.call();
                turn = 0;
                againstComputer();
            }
        }
    }
}

function userSix() {
    if (gameOn && flags[5] == 0) {
        if (twoPlayers) {
            
            secondsRemaining = 10;
            six.call();
    
            if (turn == 0) {
                turn = 1;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, O.</span>`;
            }
            else {
                turn = 0;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, X.</span>`;
            }
        }
        else {
            if (turn == 1) {
                six.call();
                turn = 0;
                againstComputer();
            }
        }
    }
}

function userSeven() {
    if (gameOn && flags[6] == 0) {
        if (twoPlayers) {
            
            secondsRemaining = 10;
            seven.call();
    
            if (turn == 0) {
                turn = 1;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, O.</span>`;
            }
            else {
                turn = 0;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, X.</span>`;
            }
        }
        else {
            if (turn == 1) {
                seven.call();
                turn = 0;
                againstComputer();
            }
        }
    }
}

function userEight() {
    if (gameOn && flags[7] == 0) {
        if (twoPlayers) {
            
            secondsRemaining = 10;
            eight.call();
    
            if (turn == 0) {
                turn = 1;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, O.</span>`;
            }
            else {
                turn = 0;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, X.</span>`;
            }
        }
        else {
            if (turn == 1) {
                eight.call();
                turn = 0;
                againstComputer();
            }
        }
    }
}

function userNine() {
    if (gameOn && flags[8] == 0) {
        if (twoPlayers) {
            
            secondsRemaining = 10;
            nine.call();
    
            if (turn == 0) {
                turn = 1;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, O.</span>`;
            }
            else {
                turn = 0;
                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Your turn, X.</span>`;
            }
        }
        else {
            if (turn == 1) {
                nine.call();
                turn = 0;
                againstComputer();
            }
        }
    }
}

/* flag functions for each grid block*/
function one(){
    if (flags[0] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("one").innerHTML = `<span class="xo">X</span>`;
            flags[0] = 1;
        }
        else {
            document.getElementById("one").innerHTML = `<span class="xo">O</span>`;
            flags[0] = 2;
        }

        let index = unusedTiles.indexOf(1);
        updateBoard(index);
    } 
}

function two(){
    if (flags[1] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("two").innerHTML = `<span class="xo">X</span>`;
            flags[1] = 1;
        }
        else {
            document.getElementById("two").innerHTML = `<span class="xo">O</span>`;
            flags[1] = 2;
        }

        let index = unusedTiles.indexOf(2);
        updateBoard(index);
    } 
}

function three(){
    if (flags[2] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("three").innerHTML = `<span class="xo">X</span>`;
            flags[2] = 1;
        }
        else {
            document.getElementById("three").innerHTML = `<span class="xo">O</span>`;
            flags[2] = 2;
        }

        let index = unusedTiles.indexOf(3);
        updateBoard(index);
    } 
}

function four(){
    if (flags[3] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("four").innerHTML = `<span class="xo">X</span>`;
            flags[3] = 1;
        }
        else {
            document.getElementById("four").innerHTML = `<span class="xo">O</span>`;
            flags[3] = 2;
        }

        let index = unusedTiles.indexOf(4);
        updateBoard(index);
    } 
}

function five(){
    if (flags[4] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("five").innerHTML = `<span class="xo">X</span>`;
            flags[4] = 1;
        }
        else {
            document.getElementById("five").innerHTML = `<span class="xo">O</span>`;
            flags[4] = 2;
        }

        let index = unusedTiles.indexOf(5);
        updateBoard(index);
    } 
}

function six(){
    if (flags[5] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("six").innerHTML = `<span class="xo">X</span>`;
            flags[5] = 1;
        }
        else {
            document.getElementById("six").innerHTML = `<span class="xo">O</span>`;
            flags[5] = 2;
        }

        let index = unusedTiles.indexOf(6);
        updateBoard(index);
    } 
}

function seven(){
    if (flags[6] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("seven").innerHTML = `<span class="xo">X</span>`;
            flags[6] = 1;
        }
        else {
            document.getElementById("seven").innerHTML = `<span class="xo">O</span>`;
            flags[6] = 2;
        }

        let index = unusedTiles.indexOf(7);
        updateBoard(index);
    } 
}

function eight(){
    if (flags[7] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("eight").innerHTML = `<span class="xo">X</span>`;
            flags[7] = 1;
        }
        else {
            document.getElementById("eight").innerHTML = `<span class="xo">O</span>`;
            flags[7] = 2;
        }

        let index = unusedTiles.indexOf(8);
        updateBoard(index);
    } 
}

function nine(){
    if (flags[8] == 0) {
        if (turn == 0) {
            document.getElementById("nine").innerHTML = `<span class="xo">X</span>`;
            flags[8] = 1;
        }
        else {
            document.getElementById("nine").innerHTML = `<span class="xo">O</span>`;
            flags[8] = 2;
        }

        let index = unusedTiles.indexOf(9);
        updateBoard(index);
    } 
}

// Updates the list of unused tiles and checks for a win
function updateBoard(index) {
    if (index != -1) {
        unusedTiles.splice(index, 1);
    
        for (let i = 0; i < winConditions.length; i++) {
            if (flags[winConditions[i][0]] == flags[winConditions[i][1]] && flags[winConditions[i][1]] == flags[winConditions[i][2]] && flags[winConditions[i][1]] != 0) {
                if (flags[winConditions[i][0]] == 2) {
                    alert("O wins!");
                    oScore += 1;
                }
                else {
                    alert("X wins!");
                    xScore += 1;
                }

                document.getElementById("scores").innerHTML = `<span class="display_player">X: ${xScore} | O: ${oScore}</span>`;
    
                gameOn = false;

                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Click on a button below to start a game.</span>`;
                document.getElementById("timer-alert").innerHTML = "";

                clearInterval(timer);
                break;
            }
            else if (unusedTiles.length <= 0) {
                alert("It's a draw!");

                gameOn = false;

                document.getElementById("whosTurn").innerHTML = `<span class="display_player">Click on a button below to start a game.</span>`;
                document.getElementById("timer-alert").innerHTML = "";

                clearInterval(timer);
                break;
            }
        }
    }
}