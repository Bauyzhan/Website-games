
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip-1").click(function(){
        $("#panel-1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip-2").click(function(){
        $("#panel-2").slideToggle("slow");
    });
});$(document).ready(function(){
    $("#flip-3").click(function(){
        $("#panel-3").slideToggle("slow");
    });
});$(document).ready(function(){
    $("#flip-4").click(function(){
        $("#panel-4").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#flip-5").click(function(){
        $("#panel-5").slideToggle("slow");
    });
});
function checkForm(el){
    var name = el.name.value;
    var pass = el.pass.value;
    console.log(name + " " + pass);
    if(!name || !pass){
        alert("Fill all gaps,please!!")
    }
    else {
        alert("Gaps are filled successfully!!")
    }
}
function charCount(textarea){
    var max = 300;
    var length = textarea.value.length;
    if(length>max){
        textarea.value = textarea.value.substring(0,300);
    }
    else {
        $('#textcount').text(length);
    }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
function play(){
    var audio = new Audio('icq.mp3');
    audio.play();
}
function playSound(){
    var audio2 = new Audio('ea.mp3');
    audio2.play();
}

