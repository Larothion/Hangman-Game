
var guessesLeft = 10;
var losses = 0;
var wins = 0;
var goodGuess=false;
var previousGuesses = [];




/*Create Array of possible words, have the computer choose one at random.*/
var wordsArray = ["dishonored", "darksouls", "halo", "warcraft","finalfantasyseven"]; 
var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
console.log(randomWord);
var answerArray=[];

/*This resets the game*/
var reset = function() {
	guessesLeft = 10;
	previousGuesses = [];
	wordsArray = ["dishonored", "darksouls", "halo", "warcraft", "finalfantasyseven"]; 
	randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
	console.log(randomWord);
	answerArray = []
	console.log("reset is running");
	for (var i=0; i < randomWord.length ; i++) {
	answerArray[i]= " _ ";
		}
		console.log(answerArray);

		document.getElementById("wordSpace").innerHTML = answerArray.join(" ");
		console.log(answerArray);
	if (randomWord == "halo") {
	haloAudio.play(haloAudio);
	console.log("halo audio should be running");
	} else { haloAudio.pause(haloAudio);
	}

	if (randomWord == "darksouls") {
		soulsAudio.play(soulsAudio);
		console.log("souls audio should be running");
	} else { soulsAudio.pause(soulsAudio);
	}

	if (randomWord == "dishonored") {
		dishonoredAudio.play(dishonoredAudio);
		console.log("Dishonored audio should be running");
	} else { dishonoredAudio.pause(dishonoredAudio);
	}

	if (randomWord == "warcraft") {
		warcraftAudio.play(warcraftAudio);
		console.log("warcraft audio should be running");
	} else { warcraftAudio.pause(warcraftAudio);
	}

	if (randomWord == "finalfantasyseven") {
		ff7Audio.play(ff7Audio);
		console.log("ff7 audio should be running");
	} else { ff7Audio.pause(ff7Audio)
	}


	
}
/*end of reset*/


document.getElementById("guess-Remaining").innerHTML = "Guesses Remaining: " + guessesLeft;
document.getElementById("winCounter").innerHTML = "Wins " + wins;
document.getElementById("lossCounter").innerHTML = "Losses: " + losses;




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
document.onkeyup = function theGame(event) {
	var userGuess = event.key;
	document.getElementById("nice").innerHTML = " ";
	document.getElementById("again").innerHTML = " ";

	
	
    for (var i=0; i < randomWord.length ; i++) {
  	  if (userGuess[i] === randomWord[i]) {
    	  answerArray[i] = userGuess;
    	} 	else { }
  	}

/*If userGuess is right, then set it equal to the randomWord. Then, have the character of the corrct letter in 
answerArray be set to userGuess and set goodGuess = to true.  This will make sure the next section doesn't happen.*/
	for(var i = 0; i < randomWord.length; i++) {
            if(randomWord[i] === userGuess) {
                answerArray[i] = userGuess;
                goodGuess = true;
                console.log(goodGuess);
            }
        }
/*If the userGuess is false, then subtract  one from the guessesLeft array.  Make sure to get goodGuess back to false
outside of the if statement so that the loops still work.*/

        if(goodGuess === false) {
            console.log(goodGuess);
            previousGuesses = " " + previousGuesses + " " + userGuess;
            console.log(previousGuesses);
            document.getElementById('guess-Remaining').innerHTML = "Guesses Remaining: " + --guessesLeft;
            var guessDisplayJs = document.getElementById('guessDisplay').innerHTML = previousGuesses;
        }
        goodGuess = false;


/*Just some fun interactions for the user while playing*/

         if(wins === 4){
            alert("You're a Gaming Legend!");
          }
          if(losses === 4){
            alert("YOU LOSE");
          }
/*end of interactions*/



    document.getElementById("wordSpace").innerHTML = answerArray.join(" ");

 /* keep track of letters remaining to be guess*/
        var lettersRemaining = randomWord.length;
        //go through loop to count the remaining letters not guessed
        for(var i = 0; i < randomWord.length; i++) {
            if(answerArray[i] !== ' _ '){
            	console.log(answerArray);
                lettersRemaining -= 1;
            }
        }
        console.log(lettersRemaining);

        //if statement that shows a winning message when the user guesses the correct word
        //showsElement() and reset is also activated

        if(lettersRemaining == 0){

            document.getElementById("nice").innerHTML = "NICE!! You know your stuff!" + "<br><br>" + "Click any key to play again!";
            winCounter.innerHTML = "Wins: " + ++wins;
            reset();
          }
         if(guessesLeft == 0){

            document.getElementById("again").innerHTML = "Uh oh... your nerd level is too low." + "<br><br>" + "Click any key to play again!";
            lossCounter.innerHTML = "Losses " + ++losses;
            reset();
          }


};
var mainAudio = new Audio('assets/mp3/zelda-audio.mp3');
var haloAudio = new Audio('assets/mp3/halo-audio.mp3');
var soulsAudio = new Audio('assets/mp3/souls-audio.mp3');
var dishonoredAudio = new Audio('assets/mp3/dishonored-audio.mp3');
var warcraftAudio = new Audio('assets/mp3/warcraft-audio.mp3');
var ff7Audio = new Audio('assets/mp3/ff7-audio.mp3');

if (randomWord == "halo") {
	haloAudio.play(haloAudio);
	console.log("halo audio should be running");
} else { 
}

if (randomWord == "darksouls") {
	soulsAudio.play(soulsAudio);
	console.log("souls audio should be running");
} else { 
}

if (randomWord == "dishonored") {
	dishonoredAudio.play(dishonoredAudio);
	console.log("Dishonored audio should be running");
} else { 
}

if (randomWord == "warcraft") {
	warcraftAudio.play(warcraftAudio);
	console.log("warcraft audio should be running");
} else { 
}

if (randomWord == "finalfantasyseven") {
	ff7Audio.play(ff7Audio);
	console.log("ff7 audio should be running");
} else { 
}






	/*for (var i=0; i < randomWord.length; i++) {

		
		if (userGuess == randomWord[i]) {
				console.log("You got the letter " + randomWord[i]);	
		} else  {	}*/



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

