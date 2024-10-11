
// Question 1
var correctq1 = $('#correct1');
var incorrectq1 = $('#incorrect11, #incorrect12, #incorrect13');
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

// Question 2 
var correctq2 = $('#correct2');
var incorrectq2 = $('#incorrect21, #incorrect22, #incorrect23');

correctq2.on("click", function() {
    correctq2.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
});


incorrectq2.on("click", function() {
    $(this).toggleClass("incorrect"); 
});

// Question 3
var correctq3 = $('#correct3');
var incorrectq3 = $('#incorrect31, #incorrect32, #incorrect33');

correctq3.on("click", function() {
    correctq3.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
});


incorrectq3.on("click", function() {
    $(this).toggleClass("incorrect"); 
});