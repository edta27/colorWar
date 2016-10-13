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
    $('.deck2').addClass('animated bounceInDown');
    setTimeout(function () {
      $('.deck2').removeClass('animated bounceInDown');
    }, 1000);
   turn()
});

$("#paper").on("click", function() {
   $(".deck2").addClass('paper').removeClass('rock').removeClass('scissor');
   playerChoice = 'paper'
    $('.deck2').addClass('animated bounceInDown');
    setTimeout(function () {
      $('.deck2').removeClass('animated bounceInDown');
    }, 1000);
   turn()

});

$("#scissor").on("click", function() {
   $(".deck2").addClass('scissor').removeClass('paper').removeClass('rock');
   playerChoice = 'scissor'
    $('.deck2').addClass('animated bounceInDown');
    setTimeout(function () {
      $('.deck2').removeClass('animated bounceInDown');
    }, 1000);
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
    }, 2000);
     } else {
      $('.lose').addClass('animated shake');
       setTimeout(function () {
       $('.lose').removeClass('animated shake');
       }  , 2000);
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

//make it rain

// number of drops created.
var nbDrop = 858;

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

  for( i=1;i<nbDrop;i++) {
  var dropLeft = randRange(0,1600);
  var dropTop = randRange(-1000,1400);

  $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
  $('#drop'+i).css('left',dropLeft);
  $('#drop'+i).css('top',dropTop);
  $('#drop'+i).css({
     '-moz-transform':'rotate(45deg)',
     '-webkit-transform':'rotate(45deg)',
     '-o-transform':'rotate(45deg)',
     '-ms-transform':'rotate(45deg)',
     'transform':'rotate(45deg)'
});

  }


}
// Make it rain
createRain();



//random

function moveDiv() {
    var $span = $("#random");

    $span.fadeOut(3000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))

        $span.css({ left: leftPos, top: topPos }).fadeIn(2000);
    });
};

moveDiv();
setInterval(moveDiv, 2000);

//click sound
var bleep = new Audio();
bleep.src = 'sound/button-20.mp3';
