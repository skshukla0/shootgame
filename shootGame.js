//Declaring Initial Player's Health 
var player1Health=100;
var player2Health =100;

let roundCounter=0;


//Ungli
let lastname;
console.log(localStorage.getItem("lastname"));
//let player1Score=0;
let player1Score=0;
let player2Score=0;




//Executing onclick Function for Shooting
function shootBtn(){





//Getting Random Power for each player
var player1Fire =   Math.floor(Math.random() * 6);
var player2Fire =  Math.floor(Math.random() * 6);

console.log("Player 1 Fire : " +player1Fire);



console.log("Player 2 Fire : "+ player2Fire);

 

localStorage.setItem("player1Score","p1FireScore");
 





//Calculating Players Health after hitting by power
player1Health = player1Health-player2Fire;
player2Health= player2Health-player1Fire;

console.log("Player 1 Health : "+player1Health);
console.log("Player 2 Health : "+player2Health)


//Counting Number of Rounds Left
roundCounter++;
console.log(roundCounter)


// The Player whose health reaches 0, dies and the game ends.
if(player1Health==0){
document.getElementById("item-3").innerHTML = "Player 2 Won the match!";

}
if(player2Health==0){
document.getElementById("item-3").innerHTML = "Player 1 Won the match!";

}


//Restricting Shoot Button after 5 Rounds are Completed
if(roundCounter==5){
document.getElementById("ShootBtn").disabled = true;
}

//Finding the Winner of individual rounds and incrementing their score by 1
if(player1Fire>player2Fire){
player1Score = player1Score+1;

}

if(player2Fire>player1Fire){
player2Score=player2Score+1;

}
localStorage.setItem("lastname",player1Score);

console.warn("Player 1 Win :" + player1Score)
console.warn("Player 2 Win :" + player2Score)
document.getElementById("item-1").innerHTML=player1Score;
document.getElementById("item-2").innerHTML=player2Score;


//Checking if anyone of the player has scored 3, if yes then terminating the game and announcing the result.
if(player1Score==3){

gameOver("Player 1 Won the match!")

}

if(player2Score==3){
gameOver("Player 2 Won the match !")

}


//Checking which player has scored more after completing 5 rounds
if(roundCounter==5){
if(player1Score>player2Score){
  
    gameOver("Player 1 Won the match!")
    
  }

  if(player2Score>player1Score){
    gameOver("Player 2 Won the match!")
    
  }


  //Checking if both the players have scored equaly, if yes then printing DRAW
  if(player2Score==player1Score){
    gameOver("Match Draw")
    
  }
} 


}

function gameOver(playercomment){
document.getElementById("item-3").innerHTML = playercomment;
document.getElementById("ShootBtn").disabled = true;
}

 
 
 
 
 
