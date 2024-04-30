const speech = new SpeechSynthesisUtterance();

const btn = document.querySelector('button');


const listen () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);

}

btn.addEventListener('click', () => {
});

