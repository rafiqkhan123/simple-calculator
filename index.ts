#! /usr/bin/env node
import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  {
    message: "Enter first number",
    type: "number",
    name: "firstNumber"
  },
  { massege: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (asnwer.operator === "Addition") { 
console.log(asnwer.firstNumber + asnwer.secondNumber);
}  else if(asnwer.operator === "Subtraction") {
      console.log(asnwer.firstNumber - asnwer.secondNumber);
    }  else if(asnwer.operator ==="Multiplication") {
      console.log(asnwer.firstNumber * asnwer.secondNumber);
    }  else if(asnwer.operator === "Division") {
      console.log(asnwer.firstNumber / asnwer.secondNumber);
    } else {
    console.log("please select valid operator")
  }  

  