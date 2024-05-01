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
let inputLength = document.querySelector('#length');

const display = document.querySelector('#display');





const generatePass = () => {
    let characters = '';
    let password = [];
    
    let maxLength = 0;
    
    if(upperCase.checked)
    {    
        characters += upperCaseSet;
        maxLength += upperCaseSet.length;
    }   

    if(lowerCase.checked)
    {    
        characters += lowerCaseSet;
        maxLength += lowerCaseSet.length;
    }   

    if(numbers.checked)
    {    
        characters += numberSet;
        maxLength += numberSet.length;
    }   

    if(symbols.checked)
    { 
           characters += symbolSet;
           maxLength += symbolSet.length;
    }

    console.log(maxLength);

    while(password.length < inputLength.value){
        let char = characters[Math.floor(Math.random() * characters.length)]        


        // handling 'Exclude Duplicate' input
        if(!duplicate.checked || !password.includes(char) )
            {
               password.push(char);
            }
    }


    // console.log(password);

    //Display the password
    // display.value = password; // in this you'll get comman
    display.value = password.join(''); // to remove the commas

}


btn.addEventListener('click', () => { 
    generatePass()
});
