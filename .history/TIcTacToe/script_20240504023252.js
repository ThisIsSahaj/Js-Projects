const cells = document.querySelectorAll('.cell');

let circleTurn;

const handleClick = (element) => {
console.log('marked');

const cell = element.target
const currentMark = circleTurn ? 'O' : "X";

placeMark(cell, currentMark)

}

cells.forEach((element) => {
    element.addEventListener('click', handleClick, {once: true})
});

const placeMark = (cell, currentMark) => {
    cell.innerHtml = currentMark;
}
