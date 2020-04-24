
var tvShows = ["rugrats", "hey arnold", "pinky and the brain",
"doug", "the simpsons", "dark wing duck", "gargoyles", "dexters lab",
"johnny bravo", "rocket power"]

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;


var getRandomWord = function(array) {
    return tvShows[Math.floor(Math.random() * tvShows.length)];

    
  }
  
  
  var randomWord = getRandomWord(tvShows);

  console.log('randomWord', randomWord);

  lettersOfWord = randomWord.split("");

  blanks = lettersOfWord.length;




for (var i = 0; i < blanks; i++) {
    blanksAndCorrect.push("_");
    
}



    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)



function reset(){
  guessesRemaining = 9;
  wrongGuess = [];
  blanksAndCorrect = [];
  getRandomWord ()
}

function checkLetters(letter){
  var letterInWord = false;

  for(var i = 0; i < blanks; i++){
    if(randomWord[i] == letter){
      letterInWord = true;
    }
  }

  if(letterInWord){
    for(var i = 0; i < blanks; i++){
      if(randomWord[i] == letter){
        blanksAndCorrect[i] = letter;
      }
    }
  }

  else{
    wrongGuess.push(letter);
    guessesRemaining--;
  }
  console.log(blanksAndCorrect);

}

function complete(){
 

  if(lettersOfWord.toString() == blanksAndCorrect.toString()){
    wins++
    reset()
    

  }else if(guessesRemaining === 0){
    losses++;
    reset()

    

  }

  
  

}

getRandomWord ()

document.onkeyup = function (event){
  var guesses = String.fromCharCode(event.keyCode).toLowerCase();

  checkLetters(guesses);

  complete();

  console.log(guesses);

  

  var html = "<p> Press any key to guess the word!</p>" +
  "<p>Current Word: "  + blanksAndCorrect.join(" ") + "</p>" +
  "<p>Guesses Left: " + guessesRemaining + "</p>" +
  "<p>Wins: " + wins + "</p>" +
  "<p> Losses: " + losses + "</p>" +
  "<p> Letters Guessed: "  + guessesRemaining + "</p>";

  document.querySelector('#game').innerHTML = html;

}