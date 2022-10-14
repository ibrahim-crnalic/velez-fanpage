var indexOfVisibleImg = 0;

function slideshow() {
  var slides = document.getElementsByClassName("slide-img");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  indexOfVisibleImg++;

  if (indexOfVisibleImg > slides.length) {
    indexOfVisibleImg = 1
  }
  
  slides[indexOfVisibleImg-1].style.display = "block";

  setTimeout(slideshow, 3000);
}

slideshow();


