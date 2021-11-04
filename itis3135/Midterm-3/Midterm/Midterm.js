var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

var updateCalories = () => {
    var calorie = document.querySelector("#enterCalorie").value;
    if(calorie == "") {
        alert("Enter the number of calories.");
    }



}
var showAverageCalories = () => {
    var sum;
    for(var i = 0; i < calories.length; i++) {
        sum += calories[i];
    }
    var avg = sum / calories.length;

    document.querySelector("#avgCalorie").value = avg;
    

}

var showMax = () => {

}
