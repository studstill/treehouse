
var getNum = prompt('What\'s your highest random number?');
var userHighNum = parseInt(getNum);
var getNum = prompt('What\'s your lowest random number?');
var userLowNum = parseInt(getNum);

var randomNumber = Math.floor(Math.random() * (userHighNum - userLowNum + 1) + userLowNum);

var results = "<p>Your random number (between " + userLowNum + " and " + userHighNum + ") is <b>" + randomNumber + "</b>.</p>";

document.write(results);
