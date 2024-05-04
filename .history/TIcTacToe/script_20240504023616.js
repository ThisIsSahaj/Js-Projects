const cells = document.querySelectorAll('.cell');

let circleTurn;


const placeMark = (cell, currentMark) => {
    // cell.innerHtml = currentMark;
    cell.classList.add(currentMark)
}



const handleClick = (element) => {
console.log('marked');

const cell = element.target
// const currentMark = circleTurn ? 'O' : "X";
const currentMark = circleTurn ? 'oTurn' : "xTurn";

placeMark(cell, currentMark)

}

cells.forEach((element) => {
    element.addEventListener('click', handleClick, {once: true})
});
