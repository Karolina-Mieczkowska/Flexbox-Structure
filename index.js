const icon = document.querySelector('.icon');
const history = document.querySelector('.history');
const card = document.querySelector('.card');
const cardElementONe = document.querySelector('.card-el.one');

icon.addEventListener('click', function(e) {
    if (screen.width < 992) {
        history.classList.toggle('history-active')
    } else {
        history.classList.remove('history-active')
    }
})

window.addEventListener('load', (event) => {
    const halfCardWidth = card.clientWidth / 2;
    card.scroll(halfCardWidth,0);
});





