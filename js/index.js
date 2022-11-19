let sliderImages = document.querySelectorAll('.slide'),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right");

current = 0;


//clear all images
function reset () {
    for (let i =0; i < sliderImages.length; i++) {
       sliderImages[i].style.display = 'none'
    }
}

//initializes the slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block'
}

//show previous
function slideLeft() {
    reset();
    sliderImages[current -1].style.display = 'block';
    current --;
}
//show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current ++;
}

// left arrow click event listener
arrowLeft.addEventListener('click', () =>{
   if(current === 0){
      current = sliderImages.length;
   }
   slideLeft();
})

// right arrow click event listener

arrowRight.addEventListener('click',()=>{
    if(current === sliderImages.length -1 /* if cuurent is equal to slider one take away one*/) {
        current = -1;
    }
    slideRight()
});

startSlide();