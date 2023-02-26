'use strict'
let secretNumber = Math.trunc(Math.random()*20+1)

let guess=Number(document.querySelector('.input').value);
let score=20;
// document.querySelector('.secret-number').textContent=secretNumber
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.sumbit').addEventListener('click',function(){
    let guess=Number(document.querySelector('.input').value);
    if(!guess){
        document.querySelector('.message').textContent='No Number';
    }
    else if(guess===secretNumber){
        document.querySelector('.message').textContent="Correct Number";
        document.querySelector('h1').style.backgroundColor='red';
        document.querySelector('.message').style.backgroundColor='red';
        document.querySelector('.highscore').textContent=score;
        document.querySelector('.secret-number').textContent=secretNumber;
    }
    else if(guess>secretNumber){
        if(score>1){
            displayMessage('📈 Too high ')
        score--;
        document.querySelector('.score').textContent=score;
    }
    else {
            displayMessage('💥 You lost the game')
            document.querySelector('.score').textContent = 0;
          }
    }
    else if(guess<secretNumber){
        if(score>1){
        displayMessage(' 📉 Too low ')
        score--;
        document.querySelector('.score').textContent=score;
    }
    else {

            displayMessage('💥 You lost the game')
            document.querySelector('.score').textContent = 0;
          }
    }
})

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('h1').style.backgroundColor='#b91647d0';
    document.querySelector('.message').style.backgroundColor='#b91647d0';
    document.querySelector('.secret-number').textContent='?';
})