const cells = document.querySelectorAll('.cell');

const cell1 = document.querySelector('#1');

cell1.addEventListener('click', mark)

cells.forEach((element) => {
    element.addEventListener('click', mark)
});

const mark = (element) => {
//   element.innerHtml = 'X';
console.log('marked');
}