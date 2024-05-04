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