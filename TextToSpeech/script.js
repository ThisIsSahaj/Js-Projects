const speech = new SpeechSynthesisUtterance();

const btn = document.querySelector('button');
const input = document.querySelector('textarea');

const voiceSelect = document.querySelector('select');


//create an array of voices 
let voicesArr = [];


window.speechSynthesis.onvoiceschanged = () => {

    // get all the voices available on the system
    voicesArr = window.speechSynthesis.getVoices();

    // to use default voice
    speech.voice = voicesArr[0];
    
    
    // display voices in dropdown using forEach loop 
    // array.forEach((element, index, array) => {     });

    voicesArr.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))

};


// change voice after select
voiceSelect.addEventListener('change', () => {
    speech.voice = voicesArr[voiceSelect.value];
})




// listen function
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

// on button click
btn.addEventListener('click', () => {
    listen();
});





