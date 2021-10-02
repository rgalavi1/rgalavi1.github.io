
//number variable
var number;

//function returns the shape based on user input
function getShape(number) {

    
    //if user enters x, returns the name of polygon
    if(number == 1) {
        alert("Number of sides: 1\nYour polygon is: Henagon");
    }
    else if(number == 2) {
        alert("Number of sides: 2\nYour polygon is: Bigon");
    }
    else if(number == 3) {
        alert("Number of sides: 3\nYour polygon is: Triangle");
    }
    else if(number == 4) {
        alert("Number of sides: 4\nYour polygon is: Quadrilateral");
    }
    else if(number == 5) {
        alert("Number of sides: 5\nYour polygon is: Pentagon");
    }
    else if(number == 6) {
        alert("Number of sides: 6\nYour polygon is: Hexagon");
    }
    else if(number == 7) {
        alert("Number of sides: 7\nYour polygon is: Heptagon");
    }
    else if(number == 8) {
        alert("Number of sides: 8\nYour polygon is: Octagon");
    }
    else if(number == 9) {
        alert("Number of sides: 9\nYour polygon is: Enneagon");
    }
    else if(number == 10) {
        alert("Number of sides: 10\nYour polygon is: Decagon");
    } 

}

//while loop to keep asking user until conditions are met
function validateEntry() {

    //prompts user to input number
    number = prompt("The Goat orders you to enter a number(1-10): ");
            
            //while conditions are not met, user is asked to enter a valid number
            while(isNaN(number) || number < -10 || number > 10) {
                alert("Please enter a valid number.");
                number = prompt("The Goat orders you to enter a number(1-10):");
            }
            //if conditions are met, outputs polygon name 
            if(number > -10 || number < 10) {
                var input = Math.abs(number);
                alert(getShape(input));
                
            }
            
           
        }

    




    


