const cells = document.querySelectorAll('.cell');

cells.forEach(element => {
    element.addEventListener('click', mark, {once: true})
});

const mark = () => {

}