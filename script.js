var correctq1 = $('#correct');
var incorrectq1 = $('.incorrect');
var score = 0;
var totalq = 10;

correctq1.on("click", togglec);
incorrectq1.on("click", togglei);

function togglec(){
    correctq1.toggleClass("correct");
    score++;
}

function togglei(){
    $(this).toggleClass("incorrect"); 
}
