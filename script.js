
// question one 
var correctq1 = $('#correct1');
var incorrectq1 = $('#incorrect11, #incorrect12, #incorrect13');
var score = 0;
var totalq = 10;

correctq1.on("click", function() {
    correctq1.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
});


// Question 2 
incorrectq1.on("click", function() {
    $(this).toggleClass("incorrect"); 
});


var correctq1 = $('#correct2');
var incorrectq1 = $('#incorrect21, #incorrect22, #incorrect23');

correctq1.on("click", function() {
    correctq1.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
});


incorrectq1.on("click", function() {
    $(this).toggleClass("incorrect"); 
});
