var NUM_QUESTIONS = 5;
var score = 0;

/***************************
  jQuery
***************************/

$(document).ready(function() {

    // activate when class items ".button" are pressed
  $('#startButton').click(function() {
    // element with ID "#beginQuiz" slide up, out of view
    $('#beginQuiz').slideUp('slow', function() {
        // slideDown elevement with ID "#question1" if it's hidden
        if ($('#question1').is(":hidden")) {
          $('#question1').slideDown('slow');
          myQuizFunc();
        }
    });
  });
});

var i = 1;
var buttonText;

var myQuizFunc = function() {

  if ($('#question' + i).hasClass('currentQuestion')) {

    // Execute is INCORRECT answer is clicked
    $('#incorrect' + i).click(function() {
      buttonText = $('#correct' + i).text();
      $('#answer' + i).slideDown('slow');
      $(this).replaceWith('<div class="button">' + buttonText + '</div>');
      $('#correct' + i).hide();
      setTimeout(function() {$("#nextQuestion" + i).fadeIn();}, 900);
      $("#nextQuestion" + i).click(function() {
        $("#nextQuestion" + i).hide();
        $('#question' + i).slideUp('slow');
        $('#question' + i).removeClass('currentQuestion');
        $("#question" + (i + 1)).addClass('currentQuestion');
        $('#question' + (i + 1)).slideDown('slow');
        i++;
        myQuizFunc();
      });
    });

    // Execute is CORRECT answer is clicked
    $('#correct' + i).click(function() {
      $(this).css('background', 'green');
      buttonText = $('#correct' + i).text();
      $('#answer' + i).slideDown('slow');
      $(this).replaceWith('<div class="button" style="background: green">' + buttonText + '</div>');
      $('#incorrect' + i).hide();
      setTimeout(function() {$("#nextQuestion" + i).fadeIn();}, 900);
      $("#nextQuestion" + i).click(function() {
        $("#nextQuestion" + i).hide();
        $('#question' + i).slideUp('slow');
        $('#question' + i).removeClass('currentQuestion');
        $("#question" + (i + 1)).addClass('currentQuestion');
        $('#question' + (i + 1)).slideDown('slow');
        score++;
        i++;
        myQuizFunc();
      });
    });

  } else {

    var crown;
    if (score === 5) {
      crown = 'GOLD';
    } else if (score > 2) {
      crown = 'SILVER';
    } else if (score > 0) {
      crown = 'BRONZE';
    }

    $("#finalScore").append(function() {
      return '<h1>Congratulations!  You finished the Quiz!</h1><p>You answered ' + score + ' correctly out of ' + NUM_QUESTIONS + '!';
    });
    $('#finalScore').slideDown('slow');

    if (score > 0) {
      $("#finalScore").append(function() {
        return '<p>You earned a ' + crown + ' crown!  Great job!</p>';
      });
    }
  }
}













