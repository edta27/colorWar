#Spirit Away
##Story

https://edta27.github.io/colorWar/

This is a rock paper scissor game. There is a story behind this game when**Chihiro Ogino** from a movie call *spirit away* met **"No face"**. **"No face"** is really lonely and he has no one to play with, so **Chihiro** plays rock, paper, scissor  with him/her when they are on the train to see Yubaba where she lives inside the forrest. The background is a forrest thats what they see outside of the train. 


##Code Example
```
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
```
##HTML/CSS/JAVASCRIPT


I used HTML5 for the basic structure for my game. I spilt it to ```<main> and <section>``` I was using main as the display for winning and losing. And I used section to wrap the game. 

In CSS I used animated.css for some of my animation, like flash, rubberband, and bounce. I also use ```@meadia``` to make the game responsive, when the screen getting smaller, I removed the display for winning and losing. 

In Javascript, I used Jquery for most of my coding. I started the order as model, behavior, user interaction, computer turn, styling and animation at the end.


##__**Motivation**__##

I made this game for my 2 years old to learn how to play rock,paper, scissor. 

##__**Build Process**__##
The game itself is really simple as the logic is really simple, 
what I found challenge is that when I am putting all the little parts 
together and get it to work. 

I found it very happy to be able to add different animations on the page. I  made the rain to 45 degree,because I felt the 45 degree rain make the 
rain looks stronger. When we are living in california, there is no rain 
thats why I want a heavy rain fall. And I also put "play with me" at the
 background,because "no name" really want someone to play with him. 

The beginnging animation is call rubberband, it is like when they are 
sitting down. When someone lose, I made it shake, its like  "nono". 
But if you win, you got a flashing win. I also made the rock, paper, 
scissor drop down from the top when player picked a card, because I felt 
like it make you think that you  are actually playing the game in person. 
I also add the theme song of spirited away as the background music. I set 
it to auto play, becuase I really like the music and I really hope people
can finish listening the whole song. 

##Test/Challenge
I use Chrome console to test and check if I have issue with the script. When I was woking at the AI, since I only have 3 variables, I used Math.random to test the range, then I split it into 3 for rock, paper, scissor.

```
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
```

