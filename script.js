// ✅ Show map using mapbox service https://www.mapbox.com/
// ✅ User can place the marker by clicking on the map
// ✅ Marker has a score 0 – 5
// ✅ Depending on the score the color of the marker will change: 0 – black, 1 – gray, 2 – red, 3 – orange, 4 – lime, 5 – green 3.
// User can change the score of existing marker.
// User can change position of existing marker.
// User can remove existing marker.
// On the top right corner user can see a table with total markers amount and amount of markers for each score.
// Example:
// ✅ Total: 100 Five: 50 Four: 30 Three: 10 Two: 10 One: 0 Zero: 0
// User can export markers to .json file and download it.

// *** Variables:
let markersTotalScore = 0;
const colorsArray = ["gray", "red", "orange", "lime", "green", "black"];
let markerBlack = 0;
let markerGray = 0;
let markerRed = 0;
let markerOrange = 0;
let markerLime = 0;
let markerGreen = 0;

// *** Functions:
// ? set score according to marker color
const setMarkerScore = (index) => {
  switch (colorsArray[index]) {
    case "gray":
      markerGray += 1;
      break;
    case "red":
      markerRed += 2;
      break;
    case "orange":
      markerOrange += 3;
      break;
    case "lime":
      markerLime += 4;
      break;
    case "green":
      markerGreen += 5;
      break;
    default:
      markerBlack += 0;
      break;
  }

  // Set markers total score
  markersTotalScore =
    markerGray + markerRed + markerOrange + markerLime + markerGreen + markerBlack;
};

// Setup the acceess
mapboxgl.accessToken =
  "pk.eyJ1IjoiZ3JpZmFubyIsImEiOiJjbGFzaXdpaWcyNG5jNDF0YWE3dHRjbXE1In0.N-jn5Cd8JkY02rCz1yoYsg";

// My city to start from
const brzeg = new mapboxgl.LngLat(17.467274706589915, 50.86297736970255);

// Create a new map
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: brzeg, // starting position [lng, lat]
  zoom: 15, // starting zoom
});

// Place the marker by clicking on the map
map.on("click", (e) => {
  // Get random number for index, to get a random color form colorsArray
  const randomNumber = Math.floor(Math.random() * 6);

  // Add marker
  const userMarker = new mapboxgl.Marker({ color: colorsArray[randomNumber] })
    .setLngLat(e.lngLat)
    .addTo(map);

  // Set marker score
  setMarkerScore(randomNumber);
});
