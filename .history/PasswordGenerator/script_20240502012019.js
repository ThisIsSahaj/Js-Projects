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
let length = document.querySelector('#length');

let characters = '';

let password = [];



const generatePass = () => {
    
    if(upperCase.checked)
    characters += upperCaseSet;
   
    if(lowerCase.checked)
    characters += lowerCaseSet;
   
    if(numbers.checked)
    characters += numberSet;
   
    if(symbols.checked)
    characters += symbolSet;


    let char = characters[Math.floor(Math.random() * characters.length)]

    console.log(char);


    console.log(characters);
    characters = '';
}


btn.addEventListener('click', () => { 
    generatePass()
});
