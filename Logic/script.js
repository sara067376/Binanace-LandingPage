
/*...............................Mobile Menu .................................................................................. */
const hamburger = document.getElementById("hamburger");
const menu1 = document.getElementById("header-left");
const menu2 = document.getElementById("header-right");
const menu3 = document.getElementById("menu-container");
const hamburgerIcon = document.getElementById("hamburger-icon");
const logo = document.getElementById("logo");
const body = document.body;

hamburger.addEventListener("click", () => {
  menu1.classList.toggle("active");
  menu2.classList.toggle("active");
  menu3.classList.toggle("active");
  logo.classList.toggle("active");
  body.classList.toggle("no-scroll");

  // Toggle icon class
  hamburgerIcon.classList.toggle("fa-bars");
  hamburgerIcon.classList.toggle("fa-xmark");
});
menu3.addEventListener("click", function(event) {
  event.stopPropagation();
});




/*.............................Open Menus of navbar in mobile .................................................................................. */
function openMenu(event, id) {
  event.stopPropagation(); // prevent event bubbling if needed
  const menu = document.getElementById(id);
  const icon = event.target;

  // Toggle active class to show/hide menu
  menu.classList.toggle("active");

  // Toggle angle icon direction
  if (icon.classList.contains("fa-angle-down")) {
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-up");
  } else {
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
  }
}

/*.............................Main code .................................................................................. */

function openTab(evt, tabID) {
  // Hide all tab contents
  const tabcontents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontents.length; i++) {
      tabcontents[i].classList.remove("active");
  }

  // Remove "active" class from all tab buttons
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  // Show the selected tab
  document.getElementById(tabID).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Automatically click the default tab on load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("defaultOpen").click();
});

//............................................Search menue tab......................................................................
function opencontent(evt, tabID) {
  
  const tabcontents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabcontents.length; i++) {
      tabcontents[i].classList.remove("active");
  }

  const tab = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }

  document.getElementById(tabID).classList.add("active");
  evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("defaultOpen").click();
});

//.............................................................................SlideShow......................................................
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  let slides = document.getElementsByClassName("slideshow");
  let nextIndex = slideIndex + n;

  if (nextIndex < 1 || nextIndex > slides.length) {
    // Don't change the slide, just update the cursor
    updateArrowCursors();
    return;
  }

  slideIndex = nextIndex;
  showSlides(slideIndex);
  updateArrowCursors();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

}

function updateArrowCursors() {
  const slides = document.getElementsByClassName("slideshow");
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");

  if (slideIndex <= 1) {
    prevArrow.style.cursor = "not-allowed";
  } else {
    prevArrow.style.cursor = "pointer";
  }

  if (slideIndex >= slides.length) {
    nextArrow.style.cursor = "not-allowed";
  } else {
    nextArrow.style.cursor = "pointer";
  }
}

// Initialize cursor state on page load
updateArrowCursors();




//........................................................PagerSlides.................................... 
let PslideIndex = 1;
PshowSlides(PslideIndex);

// Move to next/previous slide
function PplusSlides(n) {
  const Pslides = document.getElementsByClassName("pagerslide");
  const PnextIndex = PslideIndex + n;

  if (PnextIndex < 1 || PnextIndex > Pslides.length) return;

  PslideIndex = PnextIndex;
  PshowSlides(PslideIndex);
  PupdateArrowCursors();
}

// Show only the selected slide
function PshowSlides(n) {
  const Pslides = document.getElementsByClassName("pagerslide");

  for (let i = 0; i < Pslides.length; i++) {
    Pslides[i].style.display = "none";
    Pslides[i].classList.remove("active");
    Pslides[i].setAttribute("aria-hidden", "true");
  }

  const currentSlide = Pslides[n - 1];
  currentSlide.style.display = "flex"; // show with flex if needed
  currentSlide.classList.add("active");
  currentSlide.setAttribute("aria-hidden", "false");
}

// Update navigation arrow styles
function PupdateArrowCursors() {
  const Pslides = document.getElementsByClassName("pagerslide");
  const prevArrow = document.getElementById("earnPrevArrow");
  const nextArrow = document.getElementById("earnNextArrow");

  prevArrow.style.cursor = PslideIndex <= 1 ? "not-allowed" : "pointer";
  nextArrow.style.cursor = PslideIndex >= Pslides.length ? "not-allowed" : "pointer";
}

// Initialize arrows on load
document.addEventListener("DOMContentLoaded", () => {
  PshowSlides(PslideIndex);
  PupdateArrowCursors();
});
