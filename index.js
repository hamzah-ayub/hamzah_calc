#!/usr/bin/env nodenode 
import inquirer from 'inquirer';
inquirer
    .prompt([
    {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number:',
        validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number',
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Select operation:',
        choices: ['+', '-', '*', '/'],
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number:',
        validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number',
    },
])
    .then((answers) => {
    const n1 = parseFloat(answers.num1);
    const n2 = parseFloat(answers.num2);
    let result;
    switch (answers.operation) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                console.log('Error: Division by zero');
                return;
            }
            result = n1 / n2;
            break;
        default:
            console.log('Invalid operation');
            return;
    }
    console.log(`Result: ${result}`);
})
    .catch((error) => {
    console.log('Error:', error.message);
});
