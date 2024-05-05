const input = document.querySelector('#input');
const display = document.querySelector('#display');

const API_URL = "https://tinyurl.com/api-create.php?url="


const shortenUrl = () => {
    let originalUrl = input.value;

    const response = await fetch(`${API_URL}${encodeURIComponent(originalUrl)}`)
    // fetch(`https://api.shrtco.de/v2/shorten?url=${originalUrl}`)
    
    .then(response => response.json());l
    .then(data => {
        // console.log(response);
     console.log(data);
    });
}



input.addEventListener('keyup', (e)=> {
    if (e.key == 'Enter') {
       shortenUrl();
    }
})


