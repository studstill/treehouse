alert("Today, you are going to help me tell a story! \n\nI will ask for different nouns and adjectives that will be used to tell the story\n\nLet's go!");

var x;
var questions = 9;
var questionsLeft = ' [' + questions + ' questions left]';

var adjective1 = prompt('Give me an adjective');
var noun1 = prompt('Give me a very important noun');
var adjective2 = prompt('Give me an adjective');
var noun2 = prompt('Give me another noun');
var adjective3 = prompt('Give me another adjective');
var noun3 = prompt('Give me another noun');
var adjective4 = prompt('Give me yet another adjective');
var noun4 = prompt('Give me one last noun');
var adjective2 = prompt('Give me one last adjective');

alert("Thank you for all the words!\n Here is your story!");

var message = "There once was a ";
message += adjective1 + " prince, ";
message += "who traveled far and wide to save his ";
message += noun1;
message += ". His " + noun1 + ' missed him deeply ';
message += 'and longed for the day that they would be reunited. ';
message += "During the prince's journey he encounted many creatures! ";
message += "There was a " + adjective2 + ' ' + noun2 + ', ';
message += "a " + adjective3 + ' ' + noun3 + ", ";
message += "and even a " + adjective4 + ' ' + noun4 + '! ';
message += "Still, despite the long, " + adjective2 + " journey, the prince ";
message += "was reunited with his " + noun1 + ", and they both lived ";
message += "happily ever after!";

$(document).ready(function() {
    $("div").fadeIn(1000);
});

document.write('<h1>Your Story</h1>' + message + "<br><h2>The End.</h2>");


