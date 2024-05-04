const cells = document.querySelectorAll('.cell');

cells.forEach((cell)=>{
    cell.addEventListener('click', handleClick);
})

const handleClick = () => {
    console.log('clicked');
}