const input = document.querySelector('#input');
const display = document.querySelector('#display');

const API_URL = "https://api.shrtco.de/v2/shorten?url="

input.addEventListener('keyup', (e)=> {
    if (e.key == 'Enter') {
       shortenUrl();
    }
})


