const input = document.querySelector('#input');
const qrBox = document.querySelector('#qrBox');
const qrImg = document.querySelector('#qrImg');

const generate = () => {
    qrImg.src = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ input.value;
}