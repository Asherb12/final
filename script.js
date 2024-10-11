
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


// Question 4
var correctq4 = $('#correct4');
var incorrectq4 = $('#incorrect41, #incorrect42, #incorrect43');

correctq4.on("click", function() {
    correctq4.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
});


incorrectq4.on("click", function() {
    $(this).toggleClass("incorrect"); 
});

// Question 5
var correctq5 = $('#correct5');
var incorrectq5 = $('#incorrect51, #incorrect52, #incorrect53');

correctq5.on("click", function() {
    correctq5.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
});


incorrectq5.on("click", function() {
    $(this).toggleClass("incorrect"); 
});