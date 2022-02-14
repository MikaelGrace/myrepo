//targetting DOM elements
const operationHolder = document.querySelector(".operationHolder");
const resultHolder = document.querySelector(".resultHolder");
const buttons = document.querySelectorAll("button");
const deleteButton = document.querySelector(".delete");

//initializing operation holder and result holder to make them empty strings so the if condition works perfectly
operationHolder.innerHTML = ""; 
resultHolder.innerHTML = "";

//initializing the first and second values
let firstOperand = "";
let secondOperand = "";

//initializing the state of the operators
let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;



// defining the "click" function for all buttons
function click () {
    // the "for" loop goes through all the buttons
    for (let i=0; i<buttons.length; i++) {

        //the first "if" condition checks that the button is a number
        if (buttons[i].className == "number") {
            
            //the event listener acts on all number buttons
            buttons[i].addEventListener ("click", () => {
                //the if statement checks if there is a value in the result field and then initializes every field
                //to an empty field
                if (resultHolder.innerHTML != "") {
                    operationHolder.innerHTML = "";
                    firstOperand = "";
                    secondOperand = "";
                    resultHolder.innerHTML = "";
                }
                operationHolder.innerHTML += buttons[i].value;
                // this checks to make sure the first operand has been saved and then saves the value for the second operand
                if (firstOperand != "") {
                    secondOperand = operationHolder.innerHTML;
                }
                
            });
        }
        // this checks that the button clicked is an operator
        else if (buttons[i].className == "operator") {
            buttons[i].addEventListener ("click", () => {
                // this ensures that there is a value when the operator button is clicked and saves it in the first operand
                if (operationHolder.innerHTML != "" && firstOperand == "") {
                    firstOperand = operationHolder.innerHTML;
                    // the field is cleared after saving the first operand so the second operand can be saved
                    operationHolder.innerHTML = "";   
                }

                // now we determine which operator was clicked
                switch(buttons[i].value) {
                    case "+":
                        addition = true;
                        subtraction = false;
                        multiplication = false;
                        division = false;
                        break;

                    case "-":
                        subtraction = true;
                        addition = false;
                        multiplication = false;
                        division = false;
                        break;
                    
                    case "x":
                        multiplication = true;
                        addition = false;
                        subtraction = false;
                        division = false;
                        break;

                    case "÷":
                        division = true;
                        addition = false;
                        subtraction = false;
                        multiplication = false;
                        break;

                }

            });
            

        }

        else if (buttons[i].className == "delete") {
            buttons[i].addEventListener("click", () => {
                if(operationHolder.innerHTML != "" && resultHolder.innerHTML == "") {
                    operationHolder.innerHTML = operationHolder.innerHTML.substr(0,operationHolder.innerHTML.length-1);

                }
            });
        }

        else if (buttons[i].className == "all-clear") {
            buttons[i].addEventListener("click", () => {
                operationHolder.innerHTML = "";
                firstOperand = "";
                secondOperand = "";
                resultHolder.innerHTML = "";
            });
        }

        else if (buttons[i].className == "result") {
            buttons[i].addEventListener("click", () => {
                
                if (firstOperand != "" && secondOperand != "") {
                    
                    if (addition) {
                        resultHolder.innerHTML = add(parseFloat(firstOperand,10),parseFloat(secondOperand,10));
                        resultHolder.style.display = "block";
                    }

                    else if (subtraction) {
                        resultHolder.innerHTML = subtract(parseFloat(firstOperand, 10), parseFloat(secondOperand, 10));
                        resultHolder.style.display = "block";
                    }

                    else if (multiplication) {
                        resultHolder.innerHTML = multiply(parseFloat(firstOperand, 10), parseFloat(secondOperand, 10));
                        resultHolder.style.display = "block";
                    }

                    else if (division) {
                        resultHolder.innerHTML = divide(parseFloat(firstOperand, 10), parseFloat(secondOperand, 10));
                        resultHolder.style.display = "block";
                    }
                }
            });
            
        }
    }
}

click();


// operator functions

function add(num1, num2) {
    return `Ans: ${num1 + num2}`;
}

function subtract(num1, num2) {
    return `Ans: ${num1 - num2}`;
}

function multiply(num1, num2) {
    return `Ans: ${num1 * num2}`;
}

function divide(num1, num2) {
    return `Ans: ${num1 / num2}`;
}
