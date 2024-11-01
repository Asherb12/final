
//  function to clear teh local data storage to avoid repeating users score getting messed up 
function clear(){
localStorage.clear("tscore");
}
// decleares "tscore" and sets it to zero but uses a condtional to avoid reapeated resets to "tscore"
if (localStorage.getItem("tscore") == null) {
    localStorage.setItem("tscore", 0);
}

// function to increase score when userinput is correct
function incrementScore() {
    var currentScore = parseInt(localStorage.getItem("tscore")) || 0;
    currentScore++;
    localStorage.setItem("tscore", currentScore);
    console.log(currentScore);
}

//  Question 1 multiple choice

var correctq1 = $('#correct1');
var incorrectq1 = $('#incorrect11, #incorrect12, #incorrect13');


correctq1.on("click", function() {
    clear();
    incrementScore();  
    correctq1.toggleClass("correct"); 
    correctq1.attr("disabled", true);
    $('#incorrect11,#incorrect12,#incorrect13').attr("disabled", true);  

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
    if( userInput == "norway"){
        incrementScore();  
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
    incrementScore();
    correctq2.toggleClass("correct"); 
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
        incrementScore();
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
    incrementScore();
    correctq3.toggleClass("correct"); 
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
        incrementScore();
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
    incrementScore();
    correctq4.toggleClass("correct"); 
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
        incrementScore();
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
    incrementScore();
    correctq5.toggleClass("correct"); 
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
        incrementScore();
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



// Define all the score messages
var zeroOutOfTen1 = $('#zeroOutOfTen');
var oneOutOfTen1 = $('#oneOutOfTen');
var twoOutOfTen1 = $('#twoOutOfTen');
var threeOutOfTen1 = $('#threeOutOfTen');
var fourOutOfTen1 = $('#fourOutOfTen');
var fiveOutOfTen1 = $('#fiveOutOfTen');
var sixOutOfTen1 = $('#sixOutOfTen');
var sevenOutOfTen1 = $('#sevenOutOfTen');
var eightOutOfTen1 = $('#eightOutOfTen');
var nineOutOfTen1 = $('#nineOutOfTen');
var tenOutOfTen1 = $('#tenOutOfTen');

// Function to initialize score messages
function initializeScoreMessages() {
    // Disable all score messages
    zeroOutOfTen1.hide();
    oneOutOfTen1.hide();
    twoOutOfTen1.hide();
    threeOutOfTen1.hide();
    fourOutOfTen1.hide();
    fiveOutOfTen1.hide();
    sixOutOfTen1.hide();
    sevenOutOfTen1.hide();
    eightOutOfTen1.hide();
    nineOutOfTen1.hide();
    tenOutOfTen1.hide();
}

// Function to display the correct score message based on the score
function displayScoreMessage() {
    var score = parseInt(localStorage.getItem("tscore")) || 0;

    // Display the corresponding score message
    if (score === 0) {
        zeroOutOfTen1.show();
        zeroOutOfTen1.toggleClass("finalscreenclass")
    } else if (score === 1) {
        oneOutOfTen1.show();
        oneOutOfTen1.toggleClass("finalscreenclass")
    } else if (score === 2) {
        twoOutOfTen1.show();
        twoOutOfTen1.toggleClass("finalscreenclass")
    } else if (score === 3) {
        threeOutOfTen1.show();
        threeOutOfTen1.toggleClass("finalscreenclass")
    } else if (score === 4) {
        fourOutOfTen1.show();
        fourOutOfTen1.toggleClass("finalscreenclass")
    } else if (score === 5) {
        fiveOutOfTen1.show();
        fiveOutOfTen1.toggleClass("finalscreenclass")
    } else if (score === 6) {
        sixOutOfTen1.show();
        sixOutOfTen1.toggleClass("finalscreenclass")
    } else if (score === 7) {
        sevenOutOfTen1.show();
        sevenOutOfTen1.toggleClass("finalscreenclass")
    } else if (score === 8) {
        eightOutOfTen1.show();
        eightOutOfTen1.toggleClass("finalscreenclass")
    } else if (score === 9) {
        nineOutOfTen1.show();
        nineOutOfTen1.toggleClass("finalscreenclass")
    } else if (score === 10) {
        tenOutOfTen1.show();
        tenOutOfTen1.toggleClass("finalscreenclass")
    } else {
        console.error("Score out of range");
    }
}

// Initialize score messages when the document is ready
$(document).ready(function() {
    initializeScoreMessages();
    displayScoreMessage();
});
// Function to update the final score display
function updateFinalScore() {
    var finalScore = parseInt(localStorage.getItem("tscore")) || 0;
    console.log(finalScore);
    $('#finalscore').toggleClass("fsdisplay");
    $('#finalscore').text( "Your score is" + finalScore);
}


$(document).ready(function() {
    initializeScoreMessages();
    displayScoreMessage();
    updateFinalScore(); 
});
