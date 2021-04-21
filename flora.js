//LANDINGPAGE
const menu = document.querySelector("#menu");
const menuTarget = document.querySelector("#menu-target");
const tilbud = document.querySelector("#tilbud");
const tilbudTarget = document.querySelector("#tilbud-target");
const galleri = document.querySelector("#galleri");
const galleriTarget = document.querySelector("#galleri-target");
const anmeldelse = document.querySelector("#anmeldelse");
const anmeldelseTarget = document.querySelector("#anmeldelse-target");
const kontakt = document.querySelector("#kontakt");
const kontaktTarget = document.querySelector("#kontakt-target");
const pil = document.querySelector("#pil");
const video = document.querySelector("#video_player_box");
//Scroll targets
menu.addEventListener("click", function () {
  menuTarget.scrollIntoView({
    behavior: "smooth",
  });
});
tilbud.addEventListener("click", function () {
  tilbudTarget.scrollIntoView({
    behavior: "smooth",
  });
});
galleri.addEventListener("click", function () {
  galleriTarget.scrollIntoView({
    behavior: "smooth",
  });
});

anmeldelse.addEventListener("click", function () {
  anmeldelseTarget.scrollIntoView({
    behavior: "smooth",
  });
});

kontakt.addEventListener("click", function () {
  kontaktTarget.scrollIntoView({
    behavior: "smooth",
  });
});

pil.addEventListener("click", function () {
  video_player_box.scrollIntoView({
    behavior: "smooth",
  });
});

//Video


//GALLERI --
function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block';
};

function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none';
};

function toSlide(n) {
    showSlide(slideIndex = n);
};

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    let modalPreviews = document.getElementsByClassName('modal-preview');


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    };

    slides[slideIndex - 1].style.display = 'block';
};


//ANMELDELSE
var AnotherslideIndex = 1;
showSlides(AnotherslideIndex);

// Thumbnail image controls
function currentSlide(n) {
 showSlides(AnotherslideIndex = n);
}

function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");
 if (n > slides.length) {AnotherslideIndex = 1}
 if (n < 1) {AnotherslideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[AnotherslideIndex-1].style.display = "block";
 dots[AnotherslideIndex-1].className += " active";
}


//KONTAKTFORMULAREN
function validation(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;

  error_message.style.padding = "10px";

  if(fname.length <1){
    text = "Udfyld Navn";
    error_message.innerHTML = text;
    return false;

  }

  if(lname.length <1){
    text = "Udfyld Efternavn";
    error_message.innerHTML = text;
    return false;

  }

  if(email.indexOf("@") == -1 || email.length <1){
    text = "Udfyld Email";
    error_message.innerHTML = text;
    return false;

  }

  if(message.length <= 1){
    text = "Udfyld Besked";
    error_message.innerHTML = text;
    return false;

  }
  alert("Beskeden er sendt!")
  return true;

}
