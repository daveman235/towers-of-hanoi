// A board representing 3 pegs, and 3 discs on the first peg in ascending order.  
var game = {
    boardArray: [
        ["3", "2", "1"],
        [],
        []
    ]
};

// function that prints board to console using map
function printBoard() {
    var printedBoard = game.boardArray.map(function(peg) {
        return " --- " + peg.join('');
    });

    // // printedBoard.forEach(function (i) {
    // //     console.log(i);


    // //     var printedBoard = game.boardArray.map()
    // });
};

    
//var inputPrompt = prompt("Choose a disc and which peg you would like to move it to.");

//if (windowPrompt != 
// prompt that takes in disc and peg input

//function that checks moves from the oldPeg to newPeg
function checkMove(oldPeg, newPeg) {
    var topDisk = game.boardArray[oldPeg][game.boardArray[oldPeg].length -1];
    console.log(topDisk);
 };
 checkMove(0, 2);
   
 
 // game.boardArray.filter(function(check){
        
        //for (var i = 0; i < game.boardArray.length; i++) 
        //{  
       // if (isValid(game.boardArray[i])) {
       //     return "That move was successful";
       // } else {
        //   return "You cannot move a larger disc on top of a smaller one, try again";
   // }
//};



 //prompt that welcomes user to game 
var onePrompt = alert("Welcome to Towers of Hanoi !");      
    twoPrompt = prompt("Which disc do you want to move ? ");
//        if (disk > 3) {
//           alert("Invalid Move");
//        };
//    thirdPrompt = prompt("Which peg do you want to move to ?");


// function that takes in the starting peg information and ending peg information 
var move = function(startPeg, endPeg) {        
    console.log("move: " + startPeg + "to" + endPeg);
    var discToBeMoved = game.boardArray[startPeg].pop();
    game.boardArray[endPeg].push(discToBeMoved);
    
    printBoard();
    //console.log(discToBeMoved);
    //console.log(game.boardArray);
};

//var checkWinner = 

printBoard();
//debugger;
move(0, 2);




/* need to create three arrays here for the three pegs 
on game start run board (use map to print board!)
step 1. player submits move (function)
step 2. game checks if move is valid ( function)
step 3. action based on step 2. If move is valid, excute move and print. If move is invalid we'll print message to the user. 

need a hint function where user can enter peg number. Use filter to return pegs with valid moves 
all discs on one peg 
have to be in certain order, highest value to lowest value, has to be a different peg. if all conditions are met game will check winner and the gane will end using reduce function 
*/