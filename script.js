
// Question 1 Multiple choice
var correctq1 = $('#correct1');
var incorrectq1 = $('#incorrect11, #incorrect12, #incorrect13');
var score = 0;
var totalq = 10;


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
var forumq1c = $('#forumq1');
var forum1btnjs = $('#forum1btn');

 forum1btnjs.on("click", function(){
    var userInput = forumq1c.val().toLowerCase();
    console.log(userInput);
    if( userInput == "norway"){
        score++ 
        console.log("score" + score);
        forumq1c.toggleClass("correct");
        forumq1c.attr("disabled", true);
        forum1btnjs.attr("disabled",true);
    
       
    }
    else {
        forumq1c.toggleClass("incorrect");
        forumq1c.attr("disabled",true);
        forum1btnjs.attr("disabled",true);
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


// Question 4 forms 
var forumq2c = $('#forumq2');
var forum2btnjs = $('#forum2btn');

 forum2btnjs.on("click", function(){
    var userInput = forumq2c.val().toLowerCase();
    console.log(userInput);
    if( userInput == "clinton"){
        score++ 
        console.log("score" + score);
        forumq2c.toggleClass("correct");
        forumq2c.attr("disabled", true);
        forum2btnjs.attr("disabled",true);
    
       
    }
    else {
        forumq2c.toggleClass("incorrect");
        forumq2c.attr("disabled",true);
        forum2btnjs.attr("disabled",true);
    }
   
 });



// Question 5
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

// Question 6 forms 
var forumq3c = $('#forumq3');
var forum3btnjs = $('#forum3btn');

 forum3btnjs.on("click", function(){
    var userInput = forumq3c.val().toLowerCase();
    console.log(userInput);
    if( userInput == "the last supper"){
        score++ 
        console.log("score" + score);
        forumq3c.toggleClass("correct");
        forumq3c.attr("disabled", true);
        forum3btnjs.attr("disabled",true);
    
       
    }
    else {
        forumq3c.toggleClass("incorrect");
        forumq3c.attr("disabled",true);
        forum3btnjs.attr("disabled",true);
    }
   
 });

// Question 7 Multiple choice
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

// Question 8 forms 

var forumq4c = $('#forumq4');
var forum4btnjs = $('#forum4btn');

 forum4btnjs.on("click", function(){
    var userInput = forumq4c.val().toLowerCase();
    console.log(userInput);
    if( userInput == "greece"){
        score++ 
        console.log("score" + score);
        forumq4c.toggleClass("correct");
        forumq4c.attr("disabled", true);
        forum4btnjs.attr("disabled",true);
    
       
    }
    else {
        forumq4c.toggleClass("incorrect");
        forumq4c.attr("disabled",true);
        forum4btnjs.attr("disabled",true);
    }
   
 });

// Question 9 Multiple choice 
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
//  Question 10 form
var forumq5c = $('#forumq5');
var forum5btnjs = $('#forum5btn');

 forum5btnjs.on("click", function(){
    var userInput = forumq5c.val().toLowerCase();
    console.log(userInput);
    if( userInput == "cheese"){
        score++ 
        console.log("score" + score);
        forumq5c.toggleClass("correct");
        forumq5c.attr("disabled", true);
        forum5btnjs.attr("disabled",true);
    
       
    }
    else {
        forumq5c.toggleClass("incorrect");
        forumq5c.attr("disabled",true);
        forum5btnjs.attr("disabled",true);
    }
   
 });