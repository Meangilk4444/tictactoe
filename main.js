/*global variable*/
var computerScore = 0;
var personScore = 0;
var person2Score = 0;
var turn = 0; /*0 == computer turn, 1 = user turn*/
var gameOn = 1; /*true is game going on*/
var testing = 0;
var getDecision = 0;

var flag1 = 0; /* open, not in use. 1 => in use cannot put xo in there*/
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;
var flag6 = 0;
var flag7 = 0;
var flag8 = 0;
var flag9 = 0;

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    document.getElementById("newGame").addEventListener("click", newGame);
})
    


/* will choose where to place the x*/
function getComputerDecision(){
    return Math.floor(Math.random()*9+1);
}

function newGame(){
    /*when clicked starts the game/new game*/
    computerScore = 0;
    personScore = 0;
    person2Score = 0;
    while(testing < 9)
    {
        if(turn == 0)
        {
            againstComputer.call();
        }
        testing++;
    }
}

function againstComputer(){
    getDecision = getComputerDecision.call();
    if(getDecision == 1)
    {
        one.call();
    }else if(getDecision == 2)
    {
        two.call();
    }else if(getDecision == 3)
    {
        three.call();
    }else if(getDecision == 4)
    {
        four.call();
    }else if(getDecision == 5)
    {
        five.call();
    }else if(getDecision == 6)
    {
        six.call();
    }else if(getDecision == 7)
    {
        seven.call();
    }else if(getDecision == 8)
    {
        eight.call();
    }else if(getDecision == 9)
    {
        nine.call();
    }
    turn = 1;
}

/*functions to write O for user*/
function userOne(){
    if(turn == 1)
    {
        one.call();
        turn = 0;
    }
}

function userTwo(){
    if(turn == 1)
    {
        two.call();
        turn = 0;
    }
}

function userThree(){
    if(turn == 1)
    {
        three.call();
        turn = 0;
    }
}

function userFour(){
    if(turn == 1)
    {
        four.call();
        turn = 0;
    }
}

function userFive(){
    if(turn == 1)
    {
        five.call();
        turn = 0;
    }
}

function userSix(){
    if(turn == 1)
    {
        six.call();
        turn = 0;
    }
}

function userSeven(){
    if(turn == 1)
    {
        seven.call();
        turn = 0;
    }
}

function userEight(){
    if(turn == 1)
    {
        eight.call();
        turn = 0;
    }
}

function userNine(){
    if(turn == 1)
    {
        nine.call();
        turn = 0;
    }
}

/* flag functions for each grid block*/
function one(){
    if(turn == 0)
    {
        if(flag1 == 0)
        {
            flag1 = 1;
            document.getElementById("one").innerHTML = "X";
        }
    }
    else if(turn == 1){
        if(flag1 == 0)
        {
            flag = 1;
            document.getElementById("one").innerHTML = "O";
        }
    }
    
    
}

function two(){
    if(turn == 0)
    {
        if(flag2 == 0)
        {
            flag2 = 1;
            document.getElementById("two").innerHTML = "X";
        }
    }
    else if(turn == 1){
        if(flag2 == 0)
        {
            flag2 = 1;
            document.getElementById("two").innerHTML = "O";
        }
    }
}

function three(){
    if(turn == 0)
    {
        if(flag3 == 0)
        {
            flag3 = 1;
            document.getElementById("three").innerHTML = "X";
        }
    }
    else if(turn == 1){
        if(flag3 == 0)
        {
            flag3 = 1;
            document.getElementById("three").innerHTML = "O";
        }
    }
}

function four(){
    if(turn == 0)
    {
        if(flag4 == 0)
        {
            flag4 = 1;
            document.getElementById("four").innerHTML = "X";
        }
    }
    else if(turn == 1){
        if(flag4 == 0)
        {
            flag4 = 1;
            document.getElementById("four").innerHTML = "O";
        }
    }
}

function five(){
    if(turn == 0)
    {
        if(flag5 == 0)
        {
            flag5 = 1;
            document.getElementById("five").innerHTML = "X";
        }
    }
    else if(turn == 1){
        if(flag5 == 0)
        {
            flag5 = 1;
            document.getElementById("five").innerHTML = "O";
        }
    }
}

function six(){
    if(turn == 0)
    {
        if(flag6 == 0)
        {
            flag6 = 1;
            document.getElementById("six").innerHTML = "X";
        }
    }
    else if(turn == 1){
        if(flag6 == 0)
        {
            flag6 = 1;
            document.getElementById("six").innerHTML = "O";
        }
    }
}

function seven(){
    if(turn == 0)
    {
        if(flag7 == 0)
        {
            flag7 = 1;
            document.getElementById("seven").innerHTML = "X";
        }
    }
    else if(turn == 1){
        if(flag7 == 0)
        {
            flag7 = 1;
            document.getElementById("seven").innerHTML = "O";
        }
    }
}

function eight(){
    if(turn == 0)
    {
        if(flag8 == 0)
        {
            flag8 = 1;
            document.getElementById("eight").innerHTML = "X";
        }
    }
    else if(turn == 1){
        if(flag8 == 0)
        {
            flag8 = 1;
            document.getElementById("eight").innerHTML = "O";
        }
    }
}

function nine(){
    if(turn == 0)
    {
        if(flag9 == 0)
        {
            flag9 = 1;
            document.getElementById("nine").innerHTML = "X";
        }
    }
    else if(turn == 1){
        if(flag9 == 0)
        {
            flag9 = 1;
            document.getElementById("nine").innerHTML = "O";
        }
    }
}