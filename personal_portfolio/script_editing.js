// Select all elements with the "parallax" class
var parallaxElements = document.querySelectorAll(".parallax");

// Select the "has-dropdown" menu items
var dropdownMenuItems = document.querySelectorAll(".has-dropdown");

// Add an event listener to each "has-dropdown" menu item to toggle the dropdown menu on click
dropdownMenuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function (event) {
    event.preventDefault();
    this.classList.toggle("is-active");
  });
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
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
