console.log('here');
// model

// data model

var result = "" // "win", "tie", or "loss"
var cho1 = computerC;
var cho2 = userChoice;


//Behavior


var gameWon = function(cho1,cho2){

  if(
    (cho1==="rock" && cho2==="scissor")||
    (cho1==="paper" && cho2==="rock")||
    (cho1==="scissor" && cho2==="paper")

  ){
    return("won");
  }

  if(cho1===cho2)
  { return("tie");
  }

  else{
    return("lose");
  }

};





//user interaction


// addClass adds a class
// removeClass removes a class
$("#rock").on("click", function() {
   $(".deck2").addClass('rock').removeClass('paper').removeClass('scissor');

   turn()
});

$("#paper").on("click", function() {
   $(".deck2").addClass('paper').removeClass('rock').removeClass('scissor');
   turn()
});

$("#scissor").on("click", function() {
   $(".deck2").addClass('scissor').removeClass('paper').removeClass('rock');
   turn()
});



//computer turn
function turn () {
  //call AI in to a var
  var cpu = AI()
  // display AI on screen
 $('.deck1').addClass(cpu)
     if (('.deck1') === 'rock') {
     removeClass('paper').removeClass('scissor');
     }
    else if (('.deck1') === 'paper'){
     removeClass('rock').removeClass('scissor');
    }
   else if (('.deck1') === 'scissor'){
     removeClass('rock').removeClass('paper');
    }
 // // $('.deck1').removeClass('rock').removeClass('paper').removeClass('scissor')

  // determine result using gameWon()

  result =  gameWon(AI(),'cho2');

  $('#result').addClass(result);

}

function AI () {

  var cPu = Math.random();
  if( cPu <= 0.33){
     cPu = ('rock');

  } else if (cPu >= 0.34 && cPu <= 0.66){
     cPu = ('paper');
  } else {
     cPu =('scissor')
  }
  return cPu
}






