const speech = new SpeechSynthesisUtterance();

const btn = document.querySelector('button');
const input = document.querySelector('textarea');

const voiceSelect = document.querySelector('select');

console.log(speech);
const listen = () => {

    if (input.value.length > 0) {
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





