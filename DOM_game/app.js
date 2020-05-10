/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0; // as array is zero based therefore players will be 0 and 1

dice = Math.floor(6*Math.random())+1; // random number for dice
console.log(dice);

document.querySelector(`#current-${activePlayer}`).textContent=dice; // setter
//document.querySelector('#current-'+activePlayer).innerHTML='<u>'+dice+'</u>'; // to change the html also

var x=document.querySelector('#score-0').textContent; // getter

console.log(x);

document.querySelector('.dice').style.display='none';