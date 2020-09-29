// Open the Modal
function openLightbox() {
  document.getElementById("lightbox").classList.add('active');
}

// Close the Modal
function closeLightbox() {
  document.getElementById("lightbox").classList.remove('active');
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const figures = document.getElementsByClassName("lightbox__figure");
  //var dots = document.getElementsByClassName("demo");
  var caption = document.getElementById("galllery__caption");
  if (n > figures.length) {slideIndex =1}
  if (n < 1) {slideIndex = figures.length}
  for (i = 0; i < figures.length; i++) {
  figures[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
  //  dots[i].className = dots[i].className.replace(" active", "");
  //}
  figures[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  //caption.innerHTML = dots[slideIndex-1].alt;
}
