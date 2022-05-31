

function sideImg(){
    let slideIndex = 1;

    showSlides(slideIndex);

    function plusSlides(n){
        showSlides(slideIndex += n);
    }
    function currentSlide(n){
        showSlides(slideIndex = n);
    }
    function showSlides(n){
        let i;
        let Slides = document.getElementsByClassName("myslide");
        let dots = document.getElementsByClassName("dot");
        if (n > Slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = Slides.length}
        for (i = 0; i < Slides.length; i++) {
            Slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        Slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";

        //chỗ này làm cho slide auto side
        slideIndex++
        if(slideIndex > Slides.length){slideIndex = 1}
        setTimeout(showSlides,1500);
    }

}

export default sideImg();