
// Question 1 Multiple choice
var correctq1 = $('#correct1');
var incorrectq1 = $('#incorrect11, #incorrect12, #incorrect13');
var score = 0;
var totalq = 10;
var forumq1c = $('#forumq1');
var forum1btn = $('#forum1');

correctq1.on("click", function() {
    correctq1.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
    correctq1.attr("disabled", true);
    $('#incorrect11,#incorrect12,#incorrect13').attr("disabled",true);
});



incorrectq1.on("click", function() {
    $(this).toggleClass("incorrect"); 
    $('#correct1').attr("disabled", true);
    $("#correct1").toggleClass("correct");
    $('#incorrect11,#incorrect12,#incorrect13').attr("disabled",true);
});
// Question 2 forums
 forum1btn.on("click", function(){
    var userInput = $('#forumq1c').val();
    userInput = userInput.toLowerCase();
    console.log(userInput);
    if( userInput == "norway"){
        score++ 
        console.log("score" + score);
        forumq1c.toggleClass("correct");
        console.log("workp1")
    }
    else {
        forumq1c.toggleClass("incorrect");
        console.log("workp2")
    }
   
 });

// Question 3 multiple choice 
var correctq2 = $('#correct2');
var incorrectq2 = $('#incorrect21, #incorrect22, #incorrect23');

correctq2.on("click", function() {
    correctq2.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
    $("#correct2").attr("disabled", true);
    $('#incorrect21,#incorrect22,#incorrect23').attr("disabled",true);
});


incorrectq2.on("click", function() {
    $(this).toggleClass("incorrect"); 
    $('#correct2').attr("disabled", true);
    correctq2.toggleClass("correct");
    $('#incorrect21,#incorrect22,#incorrect23').attr("disabled",true);
});

// Question 3
var correctq3 = $('#correct3');
var incorrectq3 = $('#incorrect31, #incorrect32, #incorrect33');

correctq3.on("click", function() {
    correctq3.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
    $("#correct3").attr("disabled", true);
    $('#incorrect31,#incorrect32,#incorrect33').attr("disabled",true);
});


incorrectq3.on("click", function() {
    $(this).toggleClass("incorrect"); 
    $('#correct3').attr("disabled", true);
    correctq3.toggleClass("correct");
    $('#incorrect31,#incorrect32,#incorrect33').attr("disabled",true);
});


// Question 4
var correctq4 = $('#correct4');
var incorrectq4 = $('#incorrect41, #incorrect42, #incorrect43');

correctq4.on("click", function() {
    correctq4.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
    $("#correct4").attr("disabled", true);
    $('#incorrect41,#incorrect42,#incorrect43').attr("disabled",true);
});


incorrectq4.on("click", function() {
    $(this).toggleClass("incorrect"); 
    $('#correct4').attr("disabled", true);
    correctq4.toggleClass("correct");
    $('#incorrect41,#incorrect42,#incorrect43').attr("disabled",true);
});

// Question 5
var correctq5 = $('#correct5');
var incorrectq5 = $('#incorrect51, #incorrect52, #incorrect53');

correctq5.on("click", function() {
    correctq5.toggleClass("correct"); 
    score++;
    console.log("Score: " + score);
    $("#correct5").attr("disabled", true);
    $('#incorrect51,#incorrect52,#incorrect53').attr("disabled",true);
});


incorrectq5.on("click", function() {
    $(this).toggleClass("incorrect"); 
    $('#correct5').attr("disabled", true);
    correctq5.toggleClass("correct");
    $('#incorrect51,#incorrect52,#incorrect53').attr("disabled",true);
});