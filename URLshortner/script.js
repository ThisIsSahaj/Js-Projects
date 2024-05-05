const input = document.querySelector('#input');
const btn = document.querySelector('button');
const shortUrl = document.querySelector('.shortUrl');
const copyBtn = document.querySelector('#copyBtn');

const API_URL = "https://tinyurl.com/api-create.php?url="



// Generate Short Url
const shortenUrl = async () => {
    let originalUrl = input.value;

    const response = await fetch(`${API_URL}${encodeURIComponent(originalUrl)}`)

    if(response.ok){
        const data = await response.text();
        shortUrl.value = `${data}`;
    }
    else {
        shortUrl.value = 'Error Shortening!';
    }
}



// Check Length of Input Value
const checkValue = () => {
    if (input.value.length > 0) {
        shortenUrl();
    }
    else{
        input.classList.add('error');

        setTimeout(() => {
         input.classList.remove('error');
        }, 1000);
    }
}



// On pressing Enter Functionality
input.addEventListener('keyup', (e)=> {
    if (e.key == 'Enter') {
      checkValue();
    }
})

//Button Click Functionality
btn.addEventListener('click', ()=> { checkValue(); })


// Copy Functionality
copyBtn.addEventListener('click', () => {
    shortUrl.select();
    document.execCommand("copy");
})