console.log("Welcome to Cee-Lo")
var player1 = []
var computer = [];

function roll(playerRollArr) {
  for (var i=0; i<3; i++) {
    var die = Math.ceil(Math.random()*6);
    playerRollArr.push(die);
  }
  return playerRollArr;
}

function sum (playerArr) {
  var playerSum = 0;
  for(var i=0; i<playerArr.length; i++){
    playerSum = playerSum + playerArr[i];
  }
  return playerSum;
}

function compare () {
  if (sum(playerRolled) > sum(compRolled)) {
     var result = "Player one wins!";
   } else if (sum(compRolled) > sum(playerRolled)){
     result = "Computer wins!";
   } else {
     result = "It's a tie!";
   }
   return result;
}

var compRolled = roll(computer);
console.log("Computer's roll " + compRolled);
var playerRolled = roll(player1);
console.log("Player one's roll " + playerRolled);
console.log(compare());

// function contains (player) {
//   if(player.contains(4 && 5 && 6)){
//    return "You win!"
//   }
//   else if(player.contains(1 && 2 && 3)) {
//    return "You lose!"
//   }
// }

// get the contains function to work.
// var diceFace = {1: "⚀", 2: "⚁", 3: "⚂", 4: "⚃" 5: "⚄" 6: "⚅" }
// connect each number to a dice
// maybe print to document to make the unicode dice bigger and easier to see
// make a menu in a while loop with a choice to view instructions or start a game
// game in a while loop so it can continue while the player wants
// keep score.
