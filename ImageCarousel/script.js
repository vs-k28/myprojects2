const imgs = document.getElementById('images');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#images img');

let idx = 0;

let interval = setInterval(move, 3000);

function move() {
    idx++

    changeImage()
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 600}px)`;
}
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(move, 3000);
}

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

rightBtn.addEventListener('click', () => {
    idx++

    changeImage()
    resetInterval()
})