const input = document.querySelector('#input');
const display = document.querySelector('.display');

const API_URL = "https://tinyurl.com/api-create.php?url="


const shortenUrl = async () => {
    let originalUrl = input.value;

    const response = await fetch(`${API_URL}${encodeURIComponent(originalUrl)}`)

    if(response.ok){
        const data = await response.text();
        display.innerHTML = `${data}`;
    }
    else {
        display.innerHTML = 'Error Shortening!';
        
    }
}



input.addEventListener('keyup', (e)=> {
    if (e.key == 'Enter') {
        
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
    
})


