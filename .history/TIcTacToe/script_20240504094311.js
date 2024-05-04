const cells = document.querySelectorAll('.cell');

const handleClick = () => {
    console.log('clicked');
}


cells.forEach((cell)=>{
    cell.addEventListener('click', handleClick);
})
