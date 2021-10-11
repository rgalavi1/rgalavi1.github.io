
var person = [];
var salary = [];

var average = 0;
var highest = 0;

function addSalary() {
    var employee = document.getElementById("employee").value;
    var salary = document.getElementById("salary").value;

    if(employee == "") {
        

    }

    if(employee != "" && salary != "") {
        person.push(employee);
        salary.push(salary);
        alert("Added");
        
    }
}

function displayResults() {

    for(var i  = 0; i < salary.length; i++) {
        average += salary[i];
        if(salary[i] > highest) {
            highest = salary[i];
        }

    }

}

function displaySalary() {

}