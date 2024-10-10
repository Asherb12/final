
var correctq1 = $('#correct');
var incorrectq1 = $('#incorrect1, #incorrect2, #incorrect3');
var score = 0;
var totalq = 10;

correctq1.on("click", function() {
    correctq1.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
});


incorrectq1.on("click", function() {
    $(this).toggleClass("incorrect"); 
});
