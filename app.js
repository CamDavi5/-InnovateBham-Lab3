//Function call when any of the tic tac toe cells are clicked. Also home for the reset function.
function cellClicked() {
    //If the game results in a tie or a winner is decided, reset
    if (turn == 10 || winner == true) {
        gameReset();
        return;
    }
    
    //Prevent the clicked cell text content from being changed during the game
    if (event.target.textContent == 'X' || event.target.textContent == 'O') {
        console.log("PICK ANOTHER CELL, NERD!");
        return;
    }

    //Switch between X and O
    if (isXorO == 1) {
        event.target.textContent = 'X';
        isXorO = 0;
    } else {
        event.target.textContent = 'O';
        isXorO = 1;
    }

    //Check for a potential winner after the fifth turn
    if (turn >= 5) {
        checkWinner();
    }
    turn++;

}

//Called to check every possibility to see 
function checkWinner() {
    console.log("Checking for winner...");
    
    //Checking row one for X's or O's
    checkRowColumn(0, 1, 2);

    //Checking row two for X's or O's
    checkRowColumn(3, 4, 5);

    //Checking row three for X's or O's
    checkRowColumn(6, 7, 8);

    //Checking column one for X's or O's
    checkRowColumn(0, 3, 6);

    //Checking column one for X's or O's
    checkRowColumn(1, 4, 7);

    //Checking column one for X's or O's
    checkRowColumn(2, 5, 8);

    //Checking diagonal right for X's or O's
    checkRowColumn(0, 4, 8);

    //Checking diagonal left for X's or O's
    checkRowColumn(2, 4, 6);

    //Final check for a tie - forced reset
    if (turn == 9 && winner == false) {
        //alert("The game is a TIE! Please click again to reset...");
        tie++;
        extras[2].textContent = "Tie: " + tie;
        extras[3].textContent = "The game is a TIE! \nPlease click again to reset...";
    }
}

//Reusable check for matching cell text content
function checkRowColumn(c1, c2, c3) {
    if (cells[c1].textContent == 'X' && cells[c2].textContent == 'X' && cells[c3].textContent == 'X') {
        //alert("PLAYER 1 IS THE WINNER! Good Game! Please click again to reset...")
        player1++;
        extras[0].textContent = "Player 1 (X): " + player1;
        extras[3].textContent = "PLAYER 1 IS THE WINNER! Good Game! \nPlease click again to reset...";
        winner = true;
    } else if (cells[c1].textContent == 'O' && cells[c2].textContent == 'O' && cells[c3].textContent == 'O') {
        //alert("PLAYER 2 IS THE WINNER! Good Game! Please click again to reset...")
        player2++;
        extras[1].textContent = "Player 2 (O): " + player2;
        extras[3].textContent = "PLAYER 2 IS THE WINNER! Good Game! \nPlease click again to reset...";
        winner = true;
    }
}

//Resets the game board as well as all the game's checks
function gameReset() {
    for (i=0; i<cells.length; i++) {
        cells[i].textContent = "";
    }
    extras[3].textContent = "Game in progress, Player 1 starts...";
    turn = 1;
    isXorO = 1;
    winner = false;
}

let cells = document.querySelectorAll('.row > div');
console.log(cells);

for (i=0; i<cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let extras = document.querySelectorAll('.container > div');
console.log(extras);

//Default checks for the Tic Tac Toe board
let isXorO = 1;
let turn = 1;
let winner = false;
let player1 = 0;
let player2 = 0;
let tie = 0;