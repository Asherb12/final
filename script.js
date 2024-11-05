// Declarations

//  Final screen Dom Declarations
var zeroOutOfTen = $('#zeroOutOfTen');
var oneOutOfTen = $('#oneOutOfTen');
var twoOutOfTen = $('#twoOutOfTen');
var threeOutOfTen = $('#threeOutOfTen');
var fourOutOfTen = $('#fourOutOfTen');
var fiveOutOfTen = $('#fiveOutOfTen');
var sixOutOfTen = $('#sixOutOfTen');
var sevenOutOfTen = $('#sevenOutOfTen');
var eightOutOfTen = $('#eightOutOfTen');
var nineOutOfTen = $('#nineOutOfTen');
var tenOutOfTen = $('#tenOutOfTen');

//Button Questions DOM declarations 
var correctq1 = $('#correct1');
var incorrectq1 = $('#incorrect11, #incorrect12, #incorrect13');
var correctq2 = $('#correct2');
var incorrectq2 = $('#incorrect21, #incorrect22, #incorrect23');
var correctq3 = $('#correct3');
var incorrectq3 = $('#incorrect31, #incorrect32, #incorrect33');
var correctq4 = $('#correct4');
var incorrectq4 = $('#incorrect41, #incorrect42, #incorrect43');
var correctq5 = $('#correct5');
var incorrectq5 = $('#incorrect51, #incorrect52, #incorrect53');

// Form questions DOM declarations
var forumq1c = $('#forumq1');
var forum1btnjs = $('#forum1btn');
var forumq2c = $('#forumq2');
var forum2btnjs = $('#forum2btn');
var forumq3c = $('#forumq3');
var forum3btnjs = $('#forum3btn');
var forumq4c = $('#forumq4');
var forum4btnjs = $('#forum4btn');
var forumq5c = $('#forumq5');
var forum5btnjs = $('#forum5btn');



//  Question 1 multiple choice
correctq1.on("click", function() {
    clear();
    // console.log(getItem.localStorage("tscore"));
    incrementScore();  
    // console.log(getItem.localStorage("tscore"));
    correctq1.toggleClass("correct"); 
    correctq1.attr("disabled", true);
    $('#incorrect11,#incorrect12,#incorrect13').attr("disabled", true);  

});


// Function for Incorrect answer
incorrectq1.on("click", function() {
    clear();
    // console.log(getItem.localStorage("tscore"));
    $(this).toggleClass("incorrect"); 
    $('#correct1').attr("disabled", true);
    $("#correct1").toggleClass("correct");
    $('#incorrect11,#incorrect12,#incorrect13').attr("disabled",true);
});

// Question 2 forums
 forum1btnjs.on("click", function(){
    var userInput = forumq1c.val().toLowerCase();
    if( userInput == "norway"){
        // console.log(userInput);
        incrementScore();  
         // console.log(getItem.localStorage("tscore"));
        forumq1c.toggleClass("correct");
        forumq1c.attr("disabled", true);
        forum1btnjs.attr("disabled",true);
     
    }
    // else statement for Incorrect answer
    else {
        forumq1c.toggleClass("incorrect");
        forumq1c.attr("disabled",true);
        forum1btnjs.attr("disabled",true);
    }
   
 });



// Question 3 multiple choice 
correctq2.on("click", function() {
    incrementScore();
     // console.log(getItem.localStorage("tscore"));
    correctq2.toggleClass("correct"); 
    $("#correct2").attr("disabled", true);
    $('#incorrect21,#incorrect22,#incorrect23').attr("disabled",true);
   
});

// Function for Incorrect answer
incorrectq2.on("click", function() {
    $(this).toggleClass("incorrect"); 
    $('#correct2').attr("disabled", true);
    correctq2.toggleClass("correct");
    $('#incorrect21,#incorrect22,#incorrect23').attr("disabled",true);
});


// Question 4 forms 
 forum2btnjs.on("click", function(){
    var userInput = forumq2c.val().toLowerCase();
    console.log(userInput);
    if( userInput == "clinton"){
        // console.log(userInput);
        incrementScore();
        // console.log(getItem.localStorage("tscore"));
        forumq2c.toggleClass("correct");
        forumq2c.attr("disabled", true);
        forum2btnjs.attr("disabled",true);
    
       
    }
    // else statement for incorrect answer
    else {
        forumq2c.toggleClass("incorrect");
        forumq2c.attr("disabled",true);
        forum2btnjs.attr("disabled",true);
    }
   
 });



// Question 5
correctq3.on("click", function() {
    incrementScore();
    // console.log(getItem.localStorage("tscore"));
    correctq3.toggleClass("correct"); 
    $("#correct3").attr("disabled", true);
    $('#incorrect31,#incorrect32,#incorrect33').attr("disabled",true);
});

// function for incorrect answer
incorrectq3.on("click", function() {
    $(this).toggleClass("incorrect"); 
    $('#correct3').attr("disabled", true);
    correctq3.toggleClass("correct");
    $('#incorrect31,#incorrect32,#incorrect33').attr("disabled",true);
});

// Question 6 forms 
 forum3btnjs.on("click", function(){
    var userInput = forumq3c.val().toLowerCase();
    console.log(userInput);
    if( userInput == "the last supper"){
        // console.log(userinput);
        incrementScore();
        // console.log(getItem.localStorage("tscore"));
        forumq3c.toggleClass("correct");
        forumq3c.attr("disabled", true);
        forum3btnjs.attr("disabled",true);
    }
    // else statement for incorrect answer
    else {
        forumq3c.toggleClass("incorrect");
        forumq3c.attr("disabled",true);
        forum3btnjs.attr("disabled",true);
    }
   
 });

// Question 7 Multiple choice
correctq4.on("click", function() {
    incrementScore();
    // console.log(getItem.localStorage("tscore"));
    correctq4.toggleClass("correct"); 
    $("#correct4").attr("disabled", true);
    $('#incorrect41,#incorrect42,#incorrect43').attr("disabled",true);
});

// function for incorrect answer
incorrectq4.on("click", function() {
    $(this).toggleClass("incorrect"); 
    $('#correct4').attr("disabled", true);
    correctq4.toggleClass("correct");
    $('#incorrect41,#incorrect42,#incorrect43').attr("disabled",true);
});

// Question 8 forms 
 forum4btnjs.on("click", function(){
    var userInput = forumq4c.val().toLowerCase();
    console.log(userInput);
    if( userInput == "greece"){
        // console.log(userInput)
        incrementScore();
        // console.log(getItem.localStorage("tscore"));
        forumq4c.toggleClass("correct");
        forumq4c.attr("disabled", true);
        forum4btnjs.attr("disabled",true);
    
       
    }
    // else statement for incorrect answer
    else {
        forumq4c.toggleClass("incorrect");
        forumq4c.attr("disabled",true);
        forum4btnjs.attr("disabled",true);
    }
   
 });

// Question 9 Multiple choice 
correctq5.on("click", function() {
    incrementScore();
    // console.log(getItem.localStorage("tscore"));
    correctq5.toggleClass("correct"); 
    $("#correct5").attr("disabled", true);
    $('#incorrect51,#incorrect52,#incorrect53').attr("disabled",true);
});

// function for incorrect answer
incorrectq5.on("click", function() {
    $(this).toggleClass("incorrect"); 
    $('#correct5').attr("disabled", true);
    correctq5.toggleClass("correct");
    $('#incorrect51,#incorrect52,#incorrect53').attr("disabled",true);
});
//  Question 10 form
 forum5btnjs.on("click", function(){
    var userInput = forumq5c.val().toLowerCase();
    // console.log(userInput);
    if( userInput == "cheese"){
        incrementScore();
        // console.log(getItem.localStorage("tscore"));
        forumq5c.toggleClass("correct");
        forumq5c.attr("disabled", true);
        forum5btnjs.attr("disabled",true);
    
       
    }
    // else statement for incorrect answer
    else {
        forumq5c.toggleClass("incorrect");
        forumq5c.attr("disabled",true);
        forum5btnjs.attr("disabled",true);
    }
   
 });

//  Functions

//  function to clear the local data storage to avoid repeating users score getting messed up 
function clear(){
    localStorage.clear("tscore"); // clears "tscore" value in local storage
    }


    // decleares "tscore" and sets it to zero but uses a condtional to avoid reapeated resets to "tscore"
if (localStorage.getItem("tscore") == null){ /* if the value of "tscore" is null or invalid it sets the value to zero mostly for the initializtion of "tscore"*/ 
    localStorage.setItem("tscore", 0);
    // console.log(getItem.localStorage("tscore"));
}

// function to increase score when userinput is correct
function incrementScore() {
    var currentScore = parseInt(localStorage.getItem("tscore")) || 0;  /* returns the integer value of "tscore" which will return 'Nan' if the value is 0 and then || sets the value to 0 */ 
    currentScore++;
    localStorage.setItem("tscore", currentScore);
    // console.log(currentScore);
}

//  initalizes the css class of the prompts
 function styleFinalElements() {
     $('.finalscreenclass').css({  /* declares the css properties in js to be used within the functions "initializeScoreMessages" */
         'color': 'white',
         'font-size': '20px',
         'text-align': 'center',
         'font-family': 'Sriracha, sans-serif'
     });
 }
//  sets the css classes
 function initializeScoreMessages(){ /* Function that adds the css classes to each of the score prompts the ".forEach(element)" jQuery function is used to iterate each prompt*/
     [zeroOutOfTen, oneOutOfTen, twoOutOfTen, threeOutOfTen, fourOutOfTen, fiveOutOfTen, 
      sixOutOfTen, sevenOutOfTen, eightOutOfTen, nineOutOfTen, tenOutOfTen].forEach(function(element) {
         element.hide().addClass('finalscreenclass');
     });
     styleFinalElements(); // makes sure the correct css classes are added
 }
//  function to show the corresponding prompt to whatever score the user gets
 function displayScoreMessage() {
     var score = parseInt(localStorage.getItem("tscore")) || 0; // sets the score value to "tscore"(will be the same as "currentScore") and if NaN returned it will come back as zero since already initalized should just return 0-10 
    //  console.log(getItem.localStorage("tscore"));
 
     if (score === 0) {
         zeroOutOfTen.show();
     } else if (score === 1) {
         oneOutOfTen.show();
     } else if (score === 2) {
         twoOutOfTen.show();
     } else if (score === 3) {
         threeOutOfTen.show();
     } else if (score === 4) {
         fourOutOfTen.show();
     } else if (score === 5) {
         fiveOutOfTen.show();
     } else if (score === 6) {
         sixOutOfTen.show();
     } else if (score === 7) {
         sevenOutOfTen.show();
     } else if (score === 8) {
         eightOutOfTen.show();
     } else if (score === 9) {
         nineOutOfTen.show();
     } else if (score === 10) {
         tenOutOfTen.show();
     } else {
         console.error("Score out of range"); // incase of score error
     }
 }


// Function to update the final score display
function updateFinalScore() {
    var finalScore = parseInt(localStorage.getItem("tscore")) || 0;
    console.log(finalScore);
    $('#finalscore').toggleClass("fsdisplay"); // Used to set the proper css class
    $('#finalscore').text( "Score:" +" "+ finalScore+"/10"); // DOM Manupulation to update text with the finalScore variable
}

// Function for each "document" or html to be updated with the proper score when loaded
$(document).ready(function() {
    initializeScoreMessages();
    displayScoreMessage();
    updateFinalScore(); 
});

// // Initialize score messages when the document is ready
// $(document).ready(function() {
//     initializeScoreMessages();
//     displayScoreMessage();
// });

// //   when page loads the corresponding score message is shown
// $(document).ready(function() {
//     initializeScoreMessages();
// });
