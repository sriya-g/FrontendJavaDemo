//Initial Demo
var demoButton = document.getElementById("demo-button");
demoButton.addEventListener("click", displayFunFact);
var factText = document.getElementById("fact");
const date = new Date();
function displayFunFact() {
    factText.innerHTML = "Today is "+date;
    if (myFavoriteNumber == 0) {
        factText.innerHTML = "My favorite number is 0";
    }
}

//Declaring Variables
var myFavoriteNumber = 7;
let numGeese = 500;
const NUM_DAYS_IN_WEEK = 7;
//NUM_DAYS_IN_WEEK = 8; //doesn't work


//Display Variable Values
var dispButton = document.getElementById("var-disp");
dispButton.addEventListener("click", updateVars);
var disp = document.getElementById("disp");
function updateVars() {
    disp.innerHTML = '<h3>Favorite Number: '+myFavoriteNumber+'<br/> Geese on quad: '+numGeese+'<br/> Days in a week: '+NUM_DAYS_IN_WEEK+'</h3>';
    numGeese = "Millions";
    while (myFavoriteNumber > 0) {
        myFavoriteNumber = myFavoriteNumber - 1;
    }
}
