// Select all elements with the "parallax" class
var parallaxElements = document.querySelectorAll('.parallax');

// Add an event listener to the window object to update the parallax effect on scroll
window.addEventListener('scroll', function() {
  // Get the current scroll position
  var scrollTop = window.pageYOffset;

  // Loop through the parallax elements
  for (var i = 0; i < parallaxElements.length; i++) {
    // Get the current parallax element
    var element = parallaxElements[i];

    // Calculate the new background position based on the scroll position
    var newPos = (scrollTop - element.offsetTop) * 0.1;

    // Set the new background position
    element.style.backgroundPositionY = newPos + "px";
  }
});

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("mouseenter", (event) => {
    // Get the target element that was hovered over
    const target = event.target;

    // Add the "highlight" class to the target element
    target.classList.add("highlight");
  });
  number.addEventListener("mouseleave", (event) => {
    // Get the target element that was hovered out of
    const target = event.target;

    // Remove the "highlight" class from the target element
    target.classList.remove("highlight");
  });
});

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

