alert("Hey my page is running!");

var fullName = prompt("Enter your name:");

var feeling = prompt("How are you doing?");

var today = new Date();

var date = (today.getMonth() + 1) + '/' + (today.getDate()) + '/' + (today.getFullYear());

var time = (today.getHours()) + ':' + (today.getMinutes());

function goatFact() {
    alert("Did you know: \nGoats can be taught their name and to come when called.");
}
function calculatePrice() {
    alert("You can't put a price on family, but it will run you $2000.");

}
function goatName() {
    alert("Spitter\nCharlie\nBilly the Kid\nVincent Van Goat");
}
function goatJoke() {
    alert("What is a mountain goat called?\nA hillbilly.\nYikes, that was baaaaaaaaad!");
}
function goatSurvival() {
    alert("Goats use their thick coat to survive through cold winters.");
}

document.write("<h1 style= 'font-size: 50px;'>Welcome to Reviving Goat Inc.</h1>");
document.write("<hr/>");

document.write("<br><h2 style='font-size: 30px;'>Today is " + date + " and the time is: " + time + "." + "<br>The Reviving Goat Inc family welcomes you, " + fullName + ".<br>We're glad you are doing " + feeling + ".</h2>");
document.write("<h3 style='font-size: 20px;'>Click any button!</h3>");
document.write("<br>");
document.write("<button onclick= 'goatFact()'type='goat-fact-button'>Goat Fact</button>");
document.write("\t<button onclick= 'calculatePrice()' type='goat-price'>Goat Price</button>");
document.write("\t<button onclick= 'goatName()' type= 'goat-name-idea'>Goat Names</button>");
document.write("\t<button onclick= 'goatJoke()' type ='goat-insults'>Goat Insults</button>");
document.write("\t<button onclick= 'goatSurvival()' type='goat-surviving-skills'>Survival Skills</button>");






