const slides = document.getElementsByClassName("carousel_slide-item");
const dots = document.getElementsByClassName("dot");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const hamburgerMenu = document.getElementsByClassName("menu")[0];
const uList = document.querySelector(".ulist");

let slideIndex = 0;
let slidesLength = slides.length;

function afterToggleClick() {
  uList.classList.toggle("active");
}


function showSlide() {
  for(let i = 0; i < slidesLength; i++){
    slides[i].style.display = "none";
    dots[i].classList.remove("dark")
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("dark")
}

function goToNextSlideAfterClick() {
  if(slideIndex === (slidesLength - 1)){
    slideIndex = 0;
  } else {
      slideIndex++
  }
  showSlide();
}

function goToPrevSlideAfterClick() {
  if(slideIndex === 0){
    slideIndex = slidesLength - 1
  } else {
    slideIndex--
    showSlide();
  }
  showSlide();
}

hamburgerMenu.addEventListener("click", afterToggleClick);
next.addEventListener("click", goToNextSlideAfterClick);
prev.addEventListener("click", goToPrevSlideAfterClick);
showSlide();