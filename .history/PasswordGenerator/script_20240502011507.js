const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "123456789"
const symbolSet = "!@#$%&*?"

const btn = document.querySelector('button');

let upperCase = document.querySelector('#uppercase');
let lowerCase = document.querySelector('#lowercase');
let numbers = document.querySelector('#numbers');
let symbols = document.querySelector('#symbols');
let duplicate = document.querySelector('#duplicate');

let characters = ''



const generatePass = () => {
    
    if(upperCase.checked)
    characters += upperCaseSet;
   
    if(lowerCase.checked)
    characters += lowerCaseSet;
   
    if(numbers.checked)
    characters += numberSet;
   
    if(symbols.checked)
    characters += symbolSet;

    console.log(characters)
}


btn.addEventListener('click', () => { 
    generatePass()
});
