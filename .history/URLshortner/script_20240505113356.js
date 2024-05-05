const input = document.querySelector('.input');
const display = document.querySelector('.display');

const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)

