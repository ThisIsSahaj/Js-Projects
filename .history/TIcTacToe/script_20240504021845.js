const cells = document.querySelectorAll('.cell');

cells.forEach(element => {
    element.addEventListener('click', mark(element), {once: true})
});

const mark = (element) => {
//   element.innerHtml = 'X';
console.log('marked');
}