


function enterField() {
    var x = document.getElementsByTagName("fname").value;
    if(x == "") {
        document.getElementById("error").innerHTML = "Thank you " + x + " for your input, our team will contact you shortly.";
    }
    else {
    document.getElementById("name").innerHTML = "Thank you " + x + " for your input, our team will contact you shortly.";
}
}