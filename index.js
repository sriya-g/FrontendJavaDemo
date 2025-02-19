//Initial Demo
var demoButton = document.getElementById("demo-button");
demoButton.addEventListener("click", displayFunFact);
var factText = document.getElementById("fact");
const date = new Date();
function displayFunFact() {
    factText.innerHTML = "Today is "+date;
}

//Declaring Variables
var myFavoriteNumber = 7;
let numGeese = 500;
const NUM_DAYS_IN_WEEK = 7;
//NUM_DAYS_IN_WEEK = 8; //doesn't work

numGeese = "Millions";

while (myFavoriteNumber > 0) {
    myFavoriteNumber = myFavoriteNumber - 1;
}
//Display Button Values
var dispButton = document.getElementById("var-disp");
demoButton.addEventListener("click", updateVars);
var disp = document.getElementById("disp");
function displayFunFact() {
    disp.innerHTML = '<h3>Favorite Number: '+myFavoriteNumber+'\n Geese on quad: '+numGeese+'\n Days in a week: '+NUM_DAYS_IN_WEEK+'</h3>';
}
