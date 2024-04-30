const speech = new SpeechSynthesisUtterance();

const btn = document.querySelector('button');
const input = document.querySelector('textarea');

const listen = () => {

    if (input.length > 0) {
        speech.text = input.value;
        window.speechSynthesis.speak(speech);
    }
    else{
        input.classList.add('error');
        setTimeout(() => {
            input.classList.remove('error');
           }, 1000);
       
    }

}

btn.addEventListener('click', () => {
    listen();
});

input.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        listen();
    }
});




