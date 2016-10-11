console.log('here');
// model

// data model
var baseUrl = "http://www.soundjay.com/button/";
var result = "" // "win", "tie", or "loss"
var cho1 = computerC;
var cho2 = userChoice;
var playerChoice = '';

//Behavior


var gameWon = function(cho1,cho2){

  if(
    (cho1==="rock" && cho2==="scissor")||
    (cho1==="paper" && cho2==="rock")||
    (cho1==="scissor" && cho2==="paper")

  ){
    return("lose");
  }

  if(cho1===cho2)
  { return("tie");
  }

  else{
    return("win");
  }

};





//user interaction


// addClass adds a class
// removeClass removes a class
$("#rock").on("click", function() {
   $(".deck2").addClass('rock').removeClass('paper').removeClass('scissor');
   playerChoice = 'rock'
   turn()
});

$("#paper").on("click", function() {
   $(".deck2").addClass('paper').removeClass('rock').removeClass('scissor');
   playerChoice = 'paper'
   turn()

});

$("#scissor").on("click", function() {
   $(".deck2").addClass('scissor').removeClass('paper').removeClass('rock');
   playerChoice = 'scissor'
   turn()
});



//computer turn
function turn () {
  //call AI in to a var

   var cpu = AI();
  // display AI on screen
  $('.deck1').removeClass('paper').removeClass('scissor').removeClass('rock')
  $('.deck1').addClass(cpu)

  // determine result using gameWon()

  result =  gameWon(cpu, playerChoice);

  $('#result').removeClass('win').removeClass('lose').removeClass('tie')
  $('#result').addClass(result);

  if (result == 'win') {
    $('.win').addClass('animated flash');
    setTimeout(function () {
      $('.win').removeClass('animated flash');
    }, 1000);
  } else {
    $('.lose').addClass('animated shake');
    setTimeout(function () {
      $('.lose').removeClass('animated shake');
    }, 1000);

  }

}

function AI() {

  var cPu = Math.random();
  if( cPu <= 0.33){
     cPu = ('rock');

  } else if (cPu >= 0.34 && cPu <= 0.66){
     cPu = ('paper');
  } else {
     cPu =('scissor')
  }
  return cPu;
}





