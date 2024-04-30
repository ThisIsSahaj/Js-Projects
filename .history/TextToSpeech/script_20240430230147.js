const speech = new SpeechSynthesisUtterance();

const btn = document.querySelector('button');
const input = document.querySelector('textarea');

const voiceSelect = document.querySelector('select');


//create an array of voices 
const voices = [];


window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    //to use default voice
    speech.voice = voices[0];
    
    //display voices in dropdown

}



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





