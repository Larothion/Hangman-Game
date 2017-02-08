
var guessesLeft = 10;
document.getElementById("guess-Remaining").innerHTML = guessesLeft;
var losses = 0;
var wins = 0;
var previousGuesses = [];
var goodGuess=false;

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
console.log(answerArray);

/*Users start the game by the ".onkeyup" event.  Created a function to store the user's 
key choice and then, if the key choice is correct, display so in the console. Console
part mainly done for testing/understanding purposes. */
document.onkeyup = function(event) {
	var userGuess = event.key;

	
		/*if (userGuess !== previousGuesses) {
			previousGuesses = previousGuesses + userGuess;
			console.log(previousGuesses);
		}	else {
		
	 		}*/ 
      for (var i=0; i < randomWord.length ; i++) {
    if (userGuess[i] === randomWord[i]) {
      answerArray[i] = userGuess;
    } else { }
  }
	 



   for(var i = 0; i < randomWord.length; i++) {
            if(randomWord[i] === userGuess) {
                answerArray[i] = userGuess;
                goodGuess = true;
            }
        }//end for loop

          if (goodGuess === false) {

          }

for(var i = 0; i < randomWord.length; i++) {
            if(randomWord[i] === userGuess) {
                answerArray[i] = userGuess;
                goodGuess = true;
                console.log(goodGuess);
            }
        }//end for loop

        if(goodGuess === false) {
            console.log(goodGuess);
            document.getElementById('guess-Remaining').innerHTML = "Guesses Remaining: " + --guessesLeft;
        }
        goodGuess = false;


			
	for (var i=0; i < randomWord.length; i++) {

		
		if (userGuess == randomWord[i]) {
				isRight = true
				console.log("You got the letter " + randomWord[i]);	
		} else  {	}


    document.getElementById("wordSpace").innerHTML = answerArray.join(" ");
	}

 /* keep track of letters remaining to be guess*/
        var lettersRemaining = randomWord.length;
        //go through loop to count the remaining letters not guessed
        for(var i = 0; i < randomWord.length; i++) {
            if(answerArray[i] !== '_'){
                lettersRemaining -= 1;
            }
        }//end for loop
        console.log(lettersRemaining);

        //if statement that shows a winning message when the user guesses the correct word
        //showsElement() is also activated
        if(lettersRemaining == 0){
            console.log("NICE!, You guessed the word!");
            winCounter.innerHTML = "Wins: " + ++wins;
            /*showButtonElement()*/;
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

