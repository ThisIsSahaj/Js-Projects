const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "123456789"
const symbolSet = "!@#$%&*?"

const btn = document.querySelector('button');

let upperCase = document.querySelector('#uppercase').checked;
let lowerCase = document.querySelector('#lowercase').checked;
let numbers = document.querySelector('#numbers').checked;
let symbols = document.querySelector('#symbols').checked;
let duplicate = document.querySelector('#duplicate').checked;


console.log(upperCase);

if(upperCase)
console.log(upperCase);

const generatePass = () => {

}


btn.addEventListener('click', generatePass());
