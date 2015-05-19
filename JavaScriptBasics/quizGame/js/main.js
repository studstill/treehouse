var NUM_QUESTIONS = 5
var score = 0;

/***************************
  jQuery
***************************/
$(document).ready(function() {
  $('.button').click(function() {
    $('#beginQuiz').slideUp('slow', function() {

        if ($('#question1').is(":hidden")) {
          $('#question1').slideDown('slow');
        }

        if ($('#question1').hasClass('currentQuestion')) {

          $('#incorrect').click(function() {
            $('#answer1').slideDown('fast');
            $('#correct').hide();
            $(this).text('NEXT QUESTION');
            $(this).click(function() {
              $('#question1').slideUp('slow');
            });
          });
          // run code if correct button is clicked

          $('#correct').click(function() {
            $(this).css('background', 'green');
            $('#answer1').slideDown('fast');
              score += 1;
            $('#incorrect').hide();
            $(this).text('NEXT QUESTION');
            $(this).click(function() {
              $('#question1').slideUp('slow');
            });
          });
        }
    });
  });
});


