

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let inetvalId = null;

// Используем ивент "Загрузки полной страницы и скриптов с сервера"
document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        inetvalId = setInterval(nextSlide, 5000);
        //His ID is '2';
    }   
}

function showSlide(index){

    // Тут предотвращаем выход за границы того кол-ва слайдов, что есть в html
    if(index >= slides.length){
        slideIndex = 0;
    }
    // Это, чтобы не выйти за гранизу с кнопкой prevSlides
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    // Тут отменяем показ прошлого слайда
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(inetvalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
