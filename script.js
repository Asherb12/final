var correctq1 = $('#correct1');
var incorrectq1 = $('#incorrect1');
var score = 0;
var totalq = 10;

correctq1.on("click",togglec);
incorrectq1.on("click",togglei);




function work(){
    console.log("working");
}

function togglec(){
    correctq1.toggleClass("correct");
    score++;
}
function togglei(){
    incorrectq1.toggleClass("incorrect");
}