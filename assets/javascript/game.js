
var guessesLeft = 10;
var losses = 0;
var wins = 0;
var previousGuesses = [];

/*Create Array of possible words, have the computer choose one at random.*/
var wordsArray = ["flyleaf", "eagles", "killers"]; 
var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
console.log(randomWord);
var previousGuesses = [];
var answerArray=[];


/*Created a variable for answerArray and a "for loop" that creates the amount of underscores needed
for the length of the random word.  This ensures there are the same amount of 
underscores as letters for the word. Also, displayed the blanks to the screen.*/
for (var i=0; i < randomWord.length ; i++) {
	answerArray[i]= " _ ";
}
console.log(answerArray);

document.getElementById("wordSpace").innerHTML = answerArray.join(" ");


/*Users start the game by the ".onkeyup" event.  Created a function to store the user's 
key choice and then, if the key choice is correct, display so in the console. Console
part mainly done for testing/understanding purposes. */
document.onkeyup = function(event) {
	var userGuess = event.key;

	
		if (userGuess !== previousGuesses/*issue*/) {
			previousGuesses = previousGuesses + userGuess;
			console.log(previousGuesses);
		}	else {
		
	 		}
	 


	for (var i=0; i < randomWord.length ; i++) {
		if (userGuess == randomWord[i]) {
			answerArray[i] = userGuess;
			document.getElementById("wordSpace").innerHTML = answerArray.join(" ");
		} else { }
	}
			
	for (var i=0; i < randomWord.length; i++) {

		
		if (userGuess == randomWord[i]) {
				isRight = true
				console.log("You got the letter " + randomWord[i]);	
		} else  {	}
	}
};





/* //the user has not guessed this letter already

  if(letterGuess is not found in the previousGuesses array) {
     add the letterGuess into the previousGuesses array;
     console.log("new guess");*/


/* if (the letter is in the secret word - aka it was a good guess) {
         reveal the letter instead of blanks (what if letter occurs more than once?)
    
         if(the word is completely guessed) {
              console.log("the user wins!!");
              wins++;
              reset the secret word
              reset the number of guesses available
              reset the number of blanks shown
              reset the previous guesses array
         }
     }
     else {
        guessesLeft--;
        
        if(guessesLeft === 0) {
             console.log("you lost");
             losses++;
             reset the secret word
             reset the number of guesses available
             reset the number of blanks shown
             reset the previous guesses array
        }
     }
  }
  else {
     console.log("this is a duplicate guess");
  }
}*/

