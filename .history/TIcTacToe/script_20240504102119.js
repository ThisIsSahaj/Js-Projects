const cells = document.querySelectorAll('.cell');
const display = document.querySelector('.display');

const xTurn = true;

const winCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const handleClick = (cell) => {
    // console.log('clicked');
    if (xTurn) {
        cell.innerText = 'X';      
        display.innerText = "X's turn"
        xTurn = false;
    }
    else{
        cell.innerText = 'O';      
        xTurn = true;

    }
    
}


cells.forEach((cell)=>{
    cell.addEventListener('click', () => {
        handleClick(cell);
    });
})
