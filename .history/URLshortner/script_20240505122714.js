const input = document.querySelector('#input');
const btn = document.querySelector('button');
const shortUrl = document.querySelector('.shortUrl');
const copyBtn = document.querySelector('#copyBtn');

const API_URL = "https://tinyurl.com/api-create.php?url="


const shortenUrl = async () => {
    let originalUrl = input.value;

    const response = await fetch(`${API_URL}${encodeURIComponent(originalUrl)}`)

    if(response.ok){
        const data = await response.text();
        shortUrl.innerHTML = `${data}`;
    }
    else {
        shortUrl.innerHTML = 'Error Shortening!';
    }
}




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




input.addEventListener('keyup', (e)=> {
    if (e.key == 'Enter') {
      checkValue();
    }
})

btn.addEventListener('click', ()=> { checkValue(); })


