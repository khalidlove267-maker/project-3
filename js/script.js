// TOOL 1: Dark Mode Toggle
// This adds a button to the page that flips the colors
function toggleDarkMode() {
const element = document.body;
element.classList.toggle("dark-mode");
}

// TOOL 2 & MAP FEATURES: Google Maps Initialization
function initMap() {
// Coordinate for a Chicago location (Portillo's)
const favoriteSpot = { lat: 41.8922, lng: -87.6350 };

// FEATURE 1: Initialize Map with Custom Zoom and Type
const map = new google.maps.Map(document.getElementById("map"), {
zoom: 15,
center: favoriteSpot,
mapTypeId: 'terrain' // Feature: Custom Map Type
});

// FEATURE 2: Add a Custom Marker
const marker = new google.maps.Marker({
position: favoriteSpot,
map: map,
title: "Best Italian Beef!"
});

// FEATURE 3: Add an InfoWindow (Pop-up)
const infoWindow = new google.maps.InfoWindow({
content: "<h3>Portillo's Beef</h3><p>This is my favorite spot for a dipped beef!</p>"
});

marker.addListener("click", () => {
infoWindow.open(map, marker);
});
}
