/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0; // as array is zero based therefore players will be 0 and 1


//document.querySelector(`#current-${activePlayer}`).textContent=dice; // setter
//document.querySelector('#current-'+activePlayer).innerHTML='<u>'+dice+'</u>'; // to change the html also

//var x=document.querySelector('#score-0').textContent; // getter
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

var diceDOM = document.querySelector('.dice');

document.querySelector('.dice').style.display='none';

function nextPlayer()
{
    activePlayer===1 ? activePlayer=0:activePlayer=1;
    roundScore=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDOM.style.display='none';
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    //1. random number
    var dice = Math.floor(6*Math.random())+1; // random number for dice
    //2. display the result
    diceDOM.style.display='block';
    diceDOM.src = 'dice-'+dice+'.png';
    //3. update the round score if the rolled number wasn't 1
    roundScore = dice; 
    if (roundScore!==1)
    {   
        document.getElementById('current-'+activePlayer).textContent=roundScore;
        document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    }
    else
    {
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    // add current score to global
    scores[activePlayer]+=roundScore;
    // check if player won
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    var winner = document.querySelector('#name-'+activePlayer);
    if(scores[activePlayer]>=10)
    {
        winner.textContent='Winner!';
        diceDOM.style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    }
    else
    {
        nextPlayer();
    }
    

    
    
}
)