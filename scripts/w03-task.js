/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    var number1 = parseFloat(document.getElementById('add1').value);
    var number2 = parseFloat(document.getElementById('add2').value);

    document.getElementById('sum').value = add(number1, number2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

var subtract = function(number1, number2) {
    return number1 - number2;
};

var subtractNumbers = function() {
    var number1 = parseFloat(document.getElementById('subtract1').value);
    var number2 = parseFloat(document.getElementById('subtract2').value);

    document.getElementById('difference').value = subtract(number1, number2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

var multiply = (number1, number2) => number1 * number2;

var multiplyNumbers = () => {
    var number1 = parseFloat(document.getElementById('factor1').value);
    var number2 = parseFloat(document.getElementById('factor2').value);

    document.getElementById('product').value = multiply(number1, number2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    var number1 = parseFloat(document.getElementById('dividend').value);
    var number2 = parseFloat(document.getElementById('divisor').value);

    document.getElementById('quotient').value = divide(number1, number2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

document.querySelector('#getTotalDue').addEventListener('click', getTotalDue);

function getTotalDue() {

    var subtotal = parseFloat(document.getElementById('subtotal').value);

   
    var discount = document.getElementById('membership').checked ? 0.15 : 0;


    var total = subtotal - (subtotal * discount);


    document.getElementById('total').textContent = `Total Due: $${total.toFixed(2)}`;
}


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */

var oddNumbers = numbersArray.filter(function (number) {
    return number % 2 === 1;
});

document.querySelector('#odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */

var evenNumbers = numbersArray.filter(function (number) {
    return number % 2 === 0;
});

document.querySelector('#evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */

var sumOfArray = numbersArray.reduce ((sum, number) => sum + number)
document.getElementById('sumOfArray').textContent = `Sum of Array: ${sumOfArray}`;

/* Output Multiplied by 2 Array */

var multipliedArray = numbersArray.map(number => number * 2);

document.querySelector('#multiplied').textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */

var multipliedArray = numbersArray.map(number => number * 2);

var sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number);

document.querySelector('#sumOfMultiplied').textContent = `Sum of Multiplied: ${sumOfMultiplied}`;