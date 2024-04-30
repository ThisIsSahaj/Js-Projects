const speech = new SpeechSynthesisUtterance();

const btn = document.querySelector('button');
const input = document.querySelector('textarea');

const body = document.querySelector('body');

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

body.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        listen();
    }
});




