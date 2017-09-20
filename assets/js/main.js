document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.querySelector('.mobile-toggle')
  var bodyClasses = document.querySelector('body').classList
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var body = document.querySelector('body')
      body.classList.toggle('nav-open')
    })
  }
  if (bodyClasses.contains('work')) {
    doWork()
  }
})

doWork = function () {
  var work = document.querySelectorAll('.four.columns')
  var workSort = document.querySelector('.work-sort')
  var workToggles = workSort.children
  for (var i = 0; i < workToggles.length; i++) {
    workToggles[i].addEventListener('click', function (e) {
      e.preventDefault()
      for (var i = 0; i < workToggles.length; i++) {
        workToggles[i].classList.remove('active')
      }
      this.classList.add('active')
      var category = this.getAttribute('data-category')
      doSort(category, work)
    })
  }
}

doSort = function (cat, work) {
  for (var i = 0; i < work.length; i++) {
    if (cat == "all") {
      work[i].classList.remove('filtered')

    } else {
      if (work[i].classList.contains(cat)) {
        work[i].classList.remove('filtered')
      } else {
        work[i].classList.add('filtered')
      }
    }

  }
}

//slider show 1
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

//slider show 2
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}