
window.addEventListener("load", function () {
  // Check if the form has been submitted during this session
  if (!sessionStorage.getItem("formSubmitted")) {
    // Show the popup and overlay after a delay
    setTimeout(function open(event) {
      document.querySelector(".overlay").style.display = "block";
      document.querySelector(".popup").style.display = "block";
    }, 500);
  }
});

// Add an event listener to the form submission
document.getElementById("form").addEventListener("submit", function () {
  // Set a flag in sessionStorage indicating the form has been submitted
  sessionStorage.setItem("formSubmitted", "true");

  // Hide the popup and overlay when form is submitted
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

// Add an event listener to close the popup
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

