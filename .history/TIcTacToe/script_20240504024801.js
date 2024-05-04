const cells = document.querySelectorAll('.cell');

let circleTurn;

const winCombinations = [
   ['0', '1', '2'],
   ['0', '3', '6'],
   ['0', '4', '8'],
   ['1', '4', '7'],
   ['2', '5', '8'],
   ['2', '4', '6'],
   ['3', '4', '5'],
   ['6', '7', '8'],
]


const handleClick = (element) => {
    console.log('marked');
    
    const cell = element.target
    // const currentMark = circleTurn ? 'O' : "X";
    const currentMark = circleTurn ? 'oTurn' : "xTurn";
    
    placeMark(cell, currentMark);
    swapTurn();
    
    }


const startGame = () => {
    console.log('game started');
    circleTurn = false;
    
    cells.forEach((element) => {
        element.addEventListener('click', handleClick, {once: true})
    });
}
startGame();







const placeMark = (cell, currentMark) => {
    // cell.innerHtml = currentMark;
    cell.classList.add(currentMark)
}

const swapTurn = () => {
   circleTurn = !circleTurn;

}