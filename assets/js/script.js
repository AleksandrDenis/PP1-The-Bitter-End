// This is the javascript file to hide and show the menu on mobile devices
// Get the checkbox input and the nav element
var menuToggle = document.getElementById("menu-toggle");


// Get all the links inside the nav element
var links = nav.getElementsByTagName("a");

// Loop through the links and add a click event listener
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
  
// When a link is clicked, close the nav element
menuToggle.checked = false;
  });
}