// Task 1
function formatGrade(grade) {
    if (grade < 3) {
        console.log('Fail (2)');
    } else if (grade >= 3 && grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade >= 3.5 && grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade >= 4.5 && grade < 5.5) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.5) {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}
formatGrade(2.8);

// Task 2
function mathPower(digit, power) {
    console.log(Math.pow(digit, power));
}
mathPower(2, 8);

// Task 3
function repeatString(str, repetitions) {
    let repeatedStrings = '';
    for (let index = 0; index < repetitions; index++) {
        repeatedStrings+=str;
    }
    console.log(repeatedStrings);
}
repeatString('abc', 3);

// Task 4
function orders(product, quantity) {
    let total = 0;
    switch (product) {
        case 'water':
            total = quantity;
            break;
        case 'coffee':
            total = quantity * 1.5;
            break;
        case 'coke':
            total = quantity * 1.4;
            break;
        case 'snacks':
            total = quantity * 2;
            break;

        default:
            break;
    }
    console.log(total.toFixed(2));
}
orders('water', 5);

// // Task 5
function simpleCalculator(numOne, numTwo, operator) {
    let total = 0;
    let firstNumber = Number(numOne);
    let secondNumber = Number(numTwo);
    switch(operator) {
        case 'add':
            total+= firstNumber+secondNumber;
        break;
        case 'subtract':
            total+= firstNumber-secondNumber;
        break;
        case 'multiply':
            total+= firstNumber*secondNumber;
        break;
        case 'divide':
            total+= firstNumber/secondNumber;
        break;
    }
    console.log(total);
}
simpleCalculator(5, 2, 'multiply');

// Task 6
function signCheck(num1, num2, num3) {
    let isPositive = true;
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        isPositive = true;
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        isPositive = false;
    } else if (num1 > 0 && num2 > 0 && num3 < 0) {
        isPositive = false;
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
        isPositive = true;
    } else if (num1 < 0 && num2 > 0 && num3 > 0) {
        isPositive = false;
    } else if (num1 < 0 && num2 > 0 && num3 < 0) {
        isPositive = true;
    } else if (num1 < 0 && num2 < 0 && num3 > 0) {
        isPositive = true;
    } else if (num1 > 0 && num2 < 0 && num3 > 0) {
        isPositive = false;
    }

    if (isPositive) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}
signCheck(-5, 1, -1);