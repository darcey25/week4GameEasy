$(document).ready(function() {

  //Global variables
  var wins = 0;
  var losses = 0;
  var gem1 = Math.floor(Math.random() * 12) +1;
  var gem2 = Math.floor(Math.random() * 12) +1;
  var gem3 = Math.floor(Math.random() * 12) +1;
  var gem4 = Math.floor(Math.random() * 12) +1;
  var gemTotal = 0;
  var winner = new Audio("../sounds/win.mp3");
  var looser = new Audio ("loose.mp3");
  //Generates random number for User to try to match
  var randomNum = Math.floor(Math.random() * 102) + 19;

  //Places random number in html
  $('#randomNumber').text(randomNum);

  //Inserts scores into html
  $("#wins").text('Wins: ' + wins);
  $("#losses").text('Losses: ' + losses);


  // resets game
  function gameReset() {
    randomNum = Math.floor(Math.random() * 102) + 19;
    $('#randomNumber').text(randomNum);
    gem1 = Math.floor(Math.random() * 12) + 1;
    gem2 = Math.floor(Math.random() * 12) + 1;
    gem3 = Math.floor(Math.random() * 12) + 1;
    gem4 = Math.floor(Math.random() * 12) + 1;
    gemTotal = 0;
    $("#gemTotal").empty();
    console.log(gemTotal);
  };


  //Adds wins to wins section
  function win() {
    winner.play();
    $("#outcome").show().text("Winner!")
    wins++;
    $("#wins").text('Wins: ' + wins);
    gameReset();
  };

  //Adds losses to losses section
  function lose() {
    looser.play();
    $("#outcome").show().text("Loser!")
    losses++;
    $("#losses").text('Losses: ' + losses);
    gameReset();
  };



  //click listener functions for gems
  $('#redgem').on('click', function() {
    gemTotal = gemTotal + gem1;
    console.log('New gemTotal= ' + gemTotal);
    $('#gemTotal').text(gemTotal);
      if (gemTotal == randomNum) {
        win();
      }
      else if (gemTotal > randomNum) {
        lose();
      }
  });


  $('#bluegem').on('click', function() {
    gemTotal = gemTotal + gem2;
    console.log('New gemTotal= ' + gemTotal);
    $('#gemTotal').text(gemTotal);
      if (gemTotal == randomNum) {
        win();
      }
      else if (gemTotal > randomNum) {
        lose();
      }
  });


  $('#yellowgem').on('click', function() {
    gemTotal = gemTotal + gem3;
    console.log('New gemTotal= ' + gemTotal);
    $('#gemTotal').text(gemTotal);
      if (gemTotal == randomNum) {
        win();
      }
      else if (gemTotal > randomNum) {
        lose();
      }
  });


  $('#greengem').on('click', function() {
    gemTotal = gemTotal + gem4;
    console.log('New gemTotal= ' + gemTotal);
    $('#gemTotal').text(gemTotal);
      if (gemTotal == randomNum) {
        win();
      }
      else if (gemTotal > randomNum) {
        lose();
      }
  });


});