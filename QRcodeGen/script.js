const input = document.querySelector('#input');
const qrBox = document.querySelector('#qrBox');
const qrImg = document.querySelector('#qrImg');


//store qr code in local storage
const updateLS = () => {
    input.value
}

const generate = () => {

    if (input.value.length > 0) {
        
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ input.value;
        qrBox.classList.add('show-img');
    }
    
    //to show error if there is no input
    else{
        input.classList.add('error');

        setTimeout(() => {
         input.classList.remove('error');
        }, 1000);
    }
}

// input.addEventListener('keyup', (event)=>{

//     if(event.key == 'Enter')
//     {
//         generate();
//     }
// })

document.body.addEventListener('keyup', (event)=>{

    if(event.key == 'Enter')
    {
        generate();
    }
})