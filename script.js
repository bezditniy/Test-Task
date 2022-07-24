// Get root properties
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-content");


root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// Append marquee line
for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


// Get Modal
let modal = document.getElementById('myModal');
    
// Get pseudoelement to open Modal
let btn = document.getElementById("sized");

// Get <body> element to change overflow
const body = document.querySelector("body");

// Get the <span> element to close Modal
let span = document.getElementsByClassName("close")[0];

// When user clicks button, open Modal
btn.onclick = function() {
   modal.style.display = "block";
   body.style.overflow = "hidden";
   };

// When user clicks Close (x), close Modal
span.onclick = function() {
   modal.style.display = "none";
   body.style.overflow = "auto";
   };


// When user clicks anywhere outside of the Modal, close Modal
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    }
}