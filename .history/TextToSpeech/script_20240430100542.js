const speech = new SpeechSynthesisUtterance();

const btn = document.querySelector('button');
const input = document.querySelector('textarea');

const listen = () => {

    if () {
        
    }

    speech.text = input.value;
    window.speechSynthesis.speak(speech);
}

btn.addEventListener('click', () => {
    listen();
});




