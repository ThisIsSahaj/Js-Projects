const cells = document.querySelectorAll('.cell');
const display = document.querySelector('.display');

let xTurn = true;
display.innerText = "X's turn"
let count = -1;

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
    // console.log(cell);
    
    let curCell = cell.target;

    console.log(curCell);

    if (xTurn) {
        curCell.innerText = 'X';      
        display.innerText = "O's turn"
        xTurn = false;
    }
    else{
        curCell.innerText = 'O';      
        display.innerText = "X's turn"
        xTurn = true;
    }

    getWinner();
    checkDraw();
    
}


cells.forEach((element)=>{
    element.addEventListener('click', handleClick, {once:true}        // so that a cell can be clicked only once
     )
})

const showWinner = (winner) => {
    display.innerText = `${winner} won 🍾`;
}

const getWinner = () => {
    for(let combinations of winCombinations)
    {
        // console.log(combinations);
        // console.log(combinations[0], combinations[1],combinations[2]);
        
        // console.log(cells[combinations[0]], cells[combinations[1]], cells[combinations[2]]);
        
        const pos1 = cells[combinations[0]].innerText;
        const pos2 = cells[combinations[1]].innerText;
        const pos3 = cells[combinations[2]].innerText;

        if (pos1 != "", pos2 != "", pos3 != "") {
          
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
        
    }
}

const checkDraw = () => {
    cells.forEach(cell => {
        if(cell.innerText === "")
        {
            display.innerText = "Draw!";
        }
    })
}