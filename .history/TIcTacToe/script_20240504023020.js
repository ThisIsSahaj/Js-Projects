const cells = document.querySelectorAll('.cell');

// const cell1 = document.querySelector('#1');

// cell1.addEventListener('click', mark)


const mark = (element) => {
console.log('marked');
}

cells.forEach((element) => {
    element.addEventListener('click', handleClick, {once: true})
});
