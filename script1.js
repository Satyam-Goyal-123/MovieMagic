let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000); // Change slide every 8 seconds
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


// Select all elements with the class "arrow"
const arrows = document.querySelectorAll(".arrow");

// Select all elements with the class "movie-list"
const movieLists = document.querySelectorAll(".movie-list");

// Iterate over each arrow element
arrows.forEach((arrow, i) => {
  // Get the number of items (images) in the corresponding movie list
  const itemNumber = movieLists[i].querySelectorAll("img").length;

  // Initialize a click counter for each arrow
  let clickCounter = 0;

  // Add a click event listener to each arrow
  arrow.addEventListener("click", () => {
    // Calculate the number of items to move based on the window width and item width (270px)
    const ratio = Math.floor(window.innerWidth / 270);

    // Increment the click counter
    clickCounter++;

    // Check if there are more items to display
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      // Move the movie list horizontally by adjusting the transform property
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      // Reset the position if there are no more items to display
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  // Output the number of items that fit in the window width
  console.log(Math.floor(window.innerWidth / 270));
});

// TOGGLE

// Select the element with the class "toggle-ball"
const ball = document.querySelector(".toggle-ball");

// Select all elements to be toggled
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

// Add a click event listener to the toggle ball
ball.addEventListener("click", () => {
  // Toggle the "active" class for each selected item
  items.forEach((item) => {
    item.classList.toggle("active");
  });

  // Toggle the "active" class for the toggle ball itself
  ball.classList.toggle("active");
});
