const cells = document.querySelectorAll('.cell');

let circleTurn;





const handleClick = (element) => {
console.log('marked');

const cell = element.target
// const currentMark = circleTurn ? 'O' : "X";
const currentMark = circleTurn ? 'oTurn' : "xTurn";

placeMark(cell, currentMark);
swapTurn();

}


cells.forEach((element) => {
    element.addEventListener('click', handleClick, {once: true})
});



const placeMark = (cell, currentMark) => {
    // cell.innerHtml = currentMark;
    cell.classList.add(currentMark)
}

const swapTurn = () => {
   circleTurn = !circleTurn;

}