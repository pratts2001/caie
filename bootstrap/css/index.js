var slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// function autoSlideShow() {
//     let j;
//     let slideShow = document.getElementsByClassName("mySlides")
//     if (slideIndex > slideShow.length) {slideIndex = 1}    
//     if (slideIndex < 1) {slideIndex = slideShow.length}
//     for (j = 0; j < slideShow.length; j++) {
//         slideShow[j].style.display = "none";  
//     } 
//     slideShow[slideIndex-1].style.display = "block";
//     slideIndex++;
//     setTimeout(autoSlideShow(), 5000);
// }

// autoSlideShow();
