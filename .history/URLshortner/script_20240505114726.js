const input = document.querySelector('#input');
const display = document.querySelector('#display');

const API_URL = "https://api.shrtco.de/v2/shorten?url="


const shortenUrl = () => {
    let originalUrl = input.value;

    fetch(`${API_URL}${originalUrl}`)
    
    .then(response => response.json());l
    console.log(response);
    // .then(data => {

    // })
}



input.addEventListener('keyup', (e)=> {
    if (e.key == 'Enter') {
       shortenUrl();
    }
})


