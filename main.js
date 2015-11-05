angular.module('myApp', [])

.controller('mainController', function($scope) {

  this.message = "Hello";

  $scope.computerScore = 0;
  $scope.playerScore = 0;
  $scope.whosWinning = "";

  function whosWinning() {
    if($scope.computerScore > $scope.playerScore) {
      $scope.whosWinning = "Computer is winning!";
    } else if($scope.computerScore < $scope.playerScore) {
      $scope.whosWinning = "You are winning!";
    } else {
      $scope.whosWinning = "It's a tie!";
    }
  }  

  function roll() {
    var playersRoll = [];
    for (var i=0; i<3; i++) {
      var die = Math.ceil(Math.random()*6);
      playersRoll.push(die);
    }
    return playersRoll;
  }

  function sum(playersRoll) {
    var playerSum = 0;
    for(var i=0; i<playersRoll.length; i++){
      playerSum += playersRoll[i];
    }
    return playerSum;
  }

  function compare(roll) {
    var sortedRoll = roll.sort();
    if (sortedRoll.join("").match(/123/)) {
      var endResult = "lose";
     } else if (sortedRoll.join("").match(/456/)){
         endResult = "win";
     } else {
        endResult = sum(sortedRoll);
     }
    console.log(endResult)
    return endResult;
  }

  function decideWinner (playersRoll, compsRoll) {
    if (playersRoll === "win" && compsRoll === "win") {
      return "tie";
    } 
    else if (playersRoll === "lose" && compsRoll === "lose") {
      return "tie";
    }
    else if (playersRoll === "win") {
      $scope.playerScore ++;
      return "Player wins!";
    } 
    else if (compsRoll === "win") {
      $scope.computerScore ++;
      return "Computer wins!";
    }
    else if (playersRoll === "lose") {
      $scope.computerScore ++;
      return "Computer wins!";
    } 
    else if (compsRoll === "lose") {
      $scope.playerScore ++;
      return "Player wins!";
    }
    else if (playersRoll > compsRoll) {
      $scope.playerScore ++;
      return "Player wins!";
    }
    else if (playersRoll < compsRoll) {
      $scope.computerScore ++;
      return "Computer wins!";
      } 
    else {
      return "tie";
    }
  }

  function getDiceFaces(playersRoll) {
    console.log(playersRoll);
    var diceFace = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    var playerDiceFaces = [];
    for (var i=0; i<playersRoll.length; i++) {
      playerDiceFaces.push(diceFace[playersRoll[i]-1]);
    }
    return playerDiceFaces;
  }

  $scope.game = function() { 
    var player = roll();
    var computer = roll();
    $scope.playerDice = getDiceFaces(player);
    $scope.computerDice = getDiceFaces(computer);
    $scope.playerResult = compare(player);
    $scope.compResult = compare(computer);
    $scope.result = decideWinner($scope.playerResult, $scope.compResult);

    whosWinning();
  };

  $scope.newGame = function() {
    $scope.playerDice = "";
    $scope.computerDice = "";
    $scope.playerResult = "";
    $scope.compResult = "";
    $scope.result = "";
    $scope.whosWinning = "";
    $scope.computerScore = 0;
    $scope.playerScore = 0;
  };

  // make rounds
  // players

});