const body = document.body;
const prevBtn = document.getElementById('left');
const nextBtn = document.getElementById('right');
const slides = document.querySelectorAll('.slide')
console.log(slides)

let activeSlide = 0;
changeBgimage()

prevBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }
    changeBgimage()
    SetActiveSlide() 
       
})

nextBtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    } 
    changeBgimage()
    SetActiveSlide()    
})


function changeBgimage() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function SetActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active');
}
