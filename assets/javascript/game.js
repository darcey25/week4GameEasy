$(document).ready(function() {

  //Global variables
  var wins = 0;
  var losses = 0;
  var gem1 = Math.floor(Math.random() * 12) +1;
  var gem2 = Math.floor(Math.random() * 12) +1;
  var gem3 = Math.floor(Math.random() * 12) +1;
  var gem4 = Math.floor(Math.random() * 12) +1;
  var gemTotal = 0;
  //Generates random number for User to try to match
  var rando = Math.floor(Math.random() * 102) + 19;

  //Places random number in html
  $('#randomNumber').text(rando);

  //Inserts scores into html
  $("#wins").text('Wins: ' + wins);
  $("#losses").text('Losses: ' + losses);


  // resets game
  function gameReset() {
    rando = Math.floor(Math.random() * 102) + 19;
    $('#randomNumber').text(rando);
    gem1 = Math.floor(Math.random() * 12) + 1;
    gem2 = Math.floor(Math.random() * 12) + 1;
    gem3 = Math.floor(Math.random() * 12) + 1;
    gem4 = Math.floor(Math.random() * 12) + 1;
    gemTotal = 0;
    console.log(gemTotal);
  };


  //Adds wins to wins section
  function champ() {
    alert("Winner! Press OK to play again.");
    wins++;
    $("#wins").text('Wins: ' + wins);
    gameReset();
  };

  //Adds losses to losses section
  function loser() {
    alert("Loser! Press OK to play again.");
    losses++;
    $("#losses").text('Losses: ' + losses);
    gameReset();
  };



  //click listener functions for gems
  $('#redgem').on('click', function() {
    gemTotal = gemTotal + gem1;
    console.log('New gemTotal= ' + gemTotal);
    $('#gemTotal').text(gemTotal);
      if (gemTotal == rando) {
        champ();
      }
      else if (gemTotal > rando) {
        loser();
      }
  });


  $('#bluegem').on('click', function() {
    gemTotal = gemTotal + gem2;
    console.log('New gemTotal= ' + gemTotal);
    $('#gemTotal').text(gemTotal);
      if (gemTotal == rando) {
        champ();
      }
      else if (gemTotal > rando) {
        loser();
      }
  });


  $('#yellowgem').on('click', function() {
    gemTotal = gemTotal + gem3;
    console.log('New gemTotal= ' + gemTotal);
    $('#gemTotal').text(gemTotal);
      if (gemTotal == rando) {
        champ();
      }
      else if (gemTotal > rando) {
        loser();
      }
  });


  $('#greengem').on('click', function() {
    gemTotal = gemTotal + gem4;
    console.log('New gemTotal= ' + gemTotal);
    $('#gemTotal').text(gemTotal);
      if (gemTotal == rando) {
        champ();
      }
      else if (gemTotal > rando) {
        loser();
      }
  });


});