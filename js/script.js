/* --- TOOL 1: Dark Mode (Unobtrusive) --- */
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
themeBtn.addEventListener('click', () => {
document.body.classList.toggle("dark-mode");
});
}

/* --- TOOL 2: Google Maps (Error-Free) --- */
function initMap() {
const mapElement = document.getElementById("map");
// Only run if the map div exists on the current page
if (mapElement) {
const favoriteSpot = { lat: 41.8922, lng: -87.6350 };
const map = new google.maps.Map(mapElement, {
zoom: 15,
center: favoriteSpot,
mapTypeId: 'terrain'
});

const marker = new google.maps.Marker({
position: favoriteSpot,
map: map,
title: "Best Italian Beef!"
});

const infoWindow = new google.maps.InfoWindow({
content: "<h3>Portillo's Beef</h3><p>This is my favorite spot!</p>"
});

marker.addListener("click", () => {
infoWindow.open(map, marker);
});
}
}

/* --- TOOL 3: Picture Slider Logic --- */
const slider = document.querySelector('.slider-container');
if (slider) {
const images = document.querySelectorAll('.slides img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

function showImage(index) {
images[currentIndex].classList.remove('active');
currentIndex = (index + images.length) % images.length;
images[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
}
