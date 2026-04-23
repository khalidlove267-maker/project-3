// This function runs once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
console.log("JavaScript Loaded Successfully!");

// --- FEATURE 1: JavaScript Picture Slider ---
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
let currentSlide = 0;

function showNextSlide() {
slides[currentSlide].style.display = 'none'; // Hide current
currentSlide = (currentSlide + 1) % slides.length; // Logic for looping
slides[currentSlide].style.display = 'block'; // Show next
}

// Initialize: Hide all but first, then set interval
slides.forEach((slide, index) => {
if (index !== 0) slide.style.display = 'none';
});

setInterval(showNextSlide, 3000); // Change image every 3 seconds
}
});

// --- FEATURE 2: Google Maps API ---
function initMap() {
// Feature 1: Custom Coordinates
const myLocation = { lat: 41.8349, lng: -87.6270 };

const map = new google.maps.Map(document.getElementById("map"), {
zoom: 15,
center: myLocation,
mapTypeId: 'terrain' // Feature 2: Different map type
});

// Feature 3: Custom Marker with Info Window
const marker = new google.maps.Marker({
position: myLocation,
map: map,
title: "My Project Location"
});

const infoWindow = new google.maps.InfoWindow({
content: "<h3>Project 3 Landmark</h3><p>This is a custom marker!</p>"
});

marker.addListener("click", () => {
infoWindow.open(map, marker);
});
}
