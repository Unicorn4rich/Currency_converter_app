#! /usr/bin/env node
import inquirer from "inquirer"


const curruncy: any = {
    USD: 1,   // base Curruncy
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_Curruncy = await inquirer.prompt([
    {
    name: "from",
    message: "Enter your Curruncy",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR","PKR"]
    },

    {
        name: "to",
        message: "Enter Curruncy to Convert",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR","PKR"]
    },

    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }    
]);

let fromAmount = curruncy[user_Curruncy.from]; // exchange rate
let toAmount = curruncy[user_Curruncy.to];   // exchange rate
let amount = user_Curruncy.amount;

let baseAmount = amount / fromAmount;   // USD base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);

// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
