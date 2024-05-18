// Function to update stars based on the selected value
function updateStars(value) {
  // Loop through each star
  stars.forEach((star) => {
    const label = star.nextElementSibling;
    // remove previous color class
    label.classList.remove("red", "yellow", "green");
    // Add color class based on the selected value
    if (value === 1) {
      label.classList.add("red");
    } else if (value === 2 || value === 3) {
      label.classList.add("yellow");
    } else if (value === 4 || value === 5) {
      label.classList.add("green");
    }

    // scale the stars based on the selected value
    if (Number(star.value) <= value) {
      label.style.transform = "scale(1.2)";
    } else {
      label.style.transform = "scale(1)";
    }
  });

  // Change the star colors based on the selected value
  const labels = document.querySelectorAll(".star-rating label");
  labels.forEach((label, index) => {
    if (index + 1 <= value) {
      if (value === 1) {
        label.style.color = "#ff073a";
      } else if (value === 2 || value === 3) {
        label.style.color = "#ffd700";
      } else {
        label.style.color = "#32cd32";
      }
    } else {
      label.style.color = "#444";
    }
  });
}

// Function to reset stars
function resetStars() {
  stars.forEach((star) => {
    star.checked = false;
    star.nextElementSibling.classList.remove("red", "yellow", "green");
    star.nextElementSibling.style.color = "#444";
    star.nextElementSibling.style.transform = "scale(1)";
  });
}

// Event Listeners
const stars = document.querySelectorAll(".star-rating input");
const starRating = document.querySelector(".star-rating");

// Event Listener for each star
stars.forEach((star) => {
  star.addEventListener("change", () => {
    updateStars(Number(star.value));
  });
});

// Event listener to reset stars when clicking outside the star rating container
document.addEventListener("click", (event) => {
  if (!starRating.contains(event.target)) {
    resetStars();
  }
});
