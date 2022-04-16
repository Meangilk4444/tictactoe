/*global variable*/
var computerScore = 0;
var personScore = 0;
var person2Score = 0;
var turn = 0; /*0 == computer turn, 1 = user turn*/
var gameOn = true; /*true is game going on*/
var twoPlayers = false;

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

    document.getElementById("reset").addEventListener("click", resetBoardLayout, false);
})

function newGame(button){
    /*when clicked starts the game/new game*/
    resetBoardLayout();
    turn = 0;
    gameOn = true;

    console.log("Started new game");

    twoPlayers = button.currentTarget.parameter;

    if (!twoPlayers) {
        againstComputer();
    }
}

function resetBoardLayout() {
    if (!gameOn) {
        unusedTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        flags = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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

function againstComputer(){
    if (!twoPlayers && gameOn) {
        let randomIndex = getRandomIntInclusive(0, unusedTiles.length - 1);
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
    }
}

/*functions to write O for user*/
function userOne() {
    if (gameOn) {
        if (twoPlayers) {
            one.call();
    
            if (turn == 0) {
                turn = 1;
            }
            else {
                turn = 0;
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
    if (gameOn) {
        if (twoPlayers) {
            two.call();
    
            if (turn == 0) {
                turn = 1;
            }
            else {
                turn = 0;
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
    if (gameOn) {
        if (twoPlayers) {
            three.call();
    
            if (turn == 0) {
                turn = 1;
            }
            else {
                turn = 0;
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
    if (gameOn) {
        if (twoPlayers) {
            four.call();
    
            if (turn == 0) {
                turn = 1;
            }
            else {
                turn = 0;
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
    if (gameOn) {
        if (twoPlayers) {
            five.call();
    
            if (turn == 0) {
                turn = 1;
            }
            else {
                turn = 0;
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
    if (gameOn) {
        if (twoPlayers) {
            six.call();
    
            if (turn == 0) {
                turn = 1;
            }
            else {
                turn = 0;
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
    if (gameOn) {
        if (twoPlayers) {
            seven.call();
    
            if (turn == 0) {
                turn = 1;
            }
            else {
                turn = 0;
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
    if (gameOn) {
        if (twoPlayers) {
            eight.call();
    
            if (turn == 0) {
                turn = 1;
            }
            else {
                turn = 0;
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
    if (gameOn) {
        if (twoPlayers) {
            nine.call();
    
            if (turn == 0) {
                turn = 1;
            }
            else {
                turn = 0;
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
            document.getElementById("one").innerHTML = "X";
            flags[0] = 1;
        }
        else {
            document.getElementById("one").innerHTML = "O";
            flags[0] = 2;
        }

        let index = unusedTiles.indexOf(1);
        updateBoard(index);
    } 
}

function two(){
    if (flags[1] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("two").innerHTML = "X";
            flags[1] = 1;
        }
        else {
            document.getElementById("two").innerHTML = "O";
            flags[1] = 2;
        }

        let index = unusedTiles.indexOf(2);
        updateBoard(index);
    } 
}

function three(){
    if (flags[2] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("three").innerHTML = "X";
            flags[2] = 1;
        }
        else {
            document.getElementById("three").innerHTML = "O";
            flags[2] = 2;
        }

        let index = unusedTiles.indexOf(3);
        updateBoard(index);
    } 
}

function four(){
    if (flags[3] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("four").innerHTML = "X";
            flags[3] = 1;
        }
        else {
            document.getElementById("four").innerHTML = "O";
            flags[3] = 2;
        }

        let index = unusedTiles.indexOf(4);
        updateBoard(index);
    } 
}

function five(){
    if (flags[4] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("five").innerHTML = "X";
            flags[4] = 1;
        }
        else {
            document.getElementById("five").innerHTML = "O";
            flags[4] = 2;
        }

        let index = unusedTiles.indexOf(5);
        updateBoard(index);
    } 
}

function six(){
    if (flags[5] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("six").innerHTML = "X";
            flags[5] = 1;
        }
        else {
            document.getElementById("six").innerHTML = "O";
            flags[5] = 2;
        }

        let index = unusedTiles.indexOf(6);
        updateBoard(index);
    } 
}

function seven(){
    if (flags[6] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("seven").innerHTML = "X";
            flags[6] = 1;
        }
        else {
            document.getElementById("seven").innerHTML = "O";
            flags[6] = 2;
        }

        let index = unusedTiles.indexOf(7);
        updateBoard(index);
    } 
}

function eight(){
    if (flags[7] == 0 && gameOn == 1) {
        if (turn == 0) {
            document.getElementById("eight").innerHTML = "X";
            flags[7] = 1;
        }
        else {
            document.getElementById("eight").innerHTML = "O";
            flags[7] = 2;
        }

        let index = unusedTiles.indexOf(8);
        updateBoard(index);
    } 
}

function nine(){
    if (flags[8] == 0) {
        if (turn == 0) {
            document.getElementById("nine").innerHTML = "X";
            flags[8] = 1;
        }
        else {
            document.getElementById("nine").innerHTML = "O";
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
            // console.log("Checking tiles " + winConditions[i][0] + ", " + winConditions[i][1] + ", and " + winConditions[i][2] + ". Their values are " + flags[winConditions[i][0]] + ", " + flags[winConditions[i][1]] + ", and " + flags[winConditions[i][2]] + ".");
            if (flags[winConditions[i][0]] == flags[winConditions[i][1]] && flags[winConditions[i][1]] == flags[winConditions[i][2]] && flags[winConditions[i][1]] != 0) {
                if (flags[winConditions[i][0]] == 2) {
                    if (twoPlayers) {
                        console.log("player 2 wins");
                        person2Score += 1;
                    }
                    else {
                        console.log("player wins");
                        personScore += 1;
                    }
                }
                else {
                    if (twoPlayers) {
                        console.log("player 1 wins");
                        personScore += 1;
                    }
                    else {
                        console.log("cpu wins");
                        computerScore += 1;
                    }
                }
    
                gameOn = false;
                break;
            }
        }
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}