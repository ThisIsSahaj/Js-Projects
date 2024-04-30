const speech = new SpeechSynthesisUtterance();

const btn = document.querySelector('button');



btn.addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})