var numGuesses = 1;
var prevGuesses = [];
var playerList = {};
var correctNumber = parseInt(Math.random()*100);

var playerName = prompt('Hi! What is your name?');
play(); // This is your main function that runs when the page loads

function play(){
    //numGuesses = 1;
    var guess = parseInt(prompt('Guess a number from 1-100!'));
    console.log('Guess = '+ guess);
    console.log('CorrectNumber = ' + correctNumber)
    if(guess==correctNumber){
        winOptions();
    }else if(guess>correctNumber){
        window.alert('Sorry '+ playerName + ', Guess Lower');
        playAgain(guess);
    }else if(guess<correctNumber){
        window.alert('Sorry '+ playerName + ', Guess Higher');
        playAgain(guess);
   }
}

function playAgain(guess){
    numGuesses++;
    prevGuesses.push(guess);
    play();
}
function winOptions(){
    if(undefined===playerList[playerName]){
        window.alert('Thats correct ' + playerName + '! Your previous guesses were ' + prevGuesses + '!');
        playerList[playerName] = numGuesses;
    }
    if(numGuesses<playerList[playerName]){
        window.alert('Thats correct ' + playerName + '! And you beat your previous attempt by '+ (playerList[playerName]-numGuesses) +' fewer guesses!');
        playerList[playerName] = numGuesses;
    }else if(numGuesses>playerList[playerName]){
        window.alert('Thats correct ' + playerName + '! You did better in your last game by '+ (numGuesses-playerList[playerName]) +' fewer guesses!');
        playerList[playerName] = numGuesses;
    }
    //playerList[playerName] = numGuesses;
    var keepPlaying = prompt('Would you like to play again?');
    if(keepPlaying==='Yes'){
        playerName = prompt('Hi! What is your name?');
        prevGuesses = [];
        numGuesses = 1;
        play();
    }
}
