// ✅ Show map using mapbox service https://www.mapbox.com/
// ✅ User can place the marker by clicking on the map
// ✅ Marker has a score 0 – 5
// ✅ Depending on the score the color of the marker will change: 0 – black, 1 – gray, 2 – red, 3 – orange, 4 – lime, 5 – green 3.
// User can change the score of existing marker.
// User can change position of existing marker.
// User can remove existing marker.
// On the top right corner user can see a table with total markers amount and amount of markers for each score.
// Example:
// Total: 100 Five: 50 Four: 30 Three: 10 Two: 10 One: 0 Zero: 0
// User can export markers to .json file and download it.

// *** Functions:
// get rundom score max 5
function getRandomScore() {
  return Math.floor(Math.random() * 5);
}

// Setup the acceess
mapboxgl.accessToken =
  "pk.eyJ1IjoiZ3JpZmFubyIsImEiOiJjbGFzaXdpaWcyNG5jNDF0YWE3dHRjbXE1In0.N-jn5Cd8JkY02rCz1yoYsg";

// My city to start from
const brzeg = new mapboxgl.LngLat(17.467274706589915, 50.86297736970255);
const userMarker = {
  color: "",
  score: 0,
};
const userMarkers = [];

// Create a new map
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: brzeg, // starting position [lng, lat]
  zoom: 15, // starting zoom
});

// Place the marker by clicking on the map
map.on("click", (e) => {
  let color = "black";

  switch (getRandomScore()) {
    case 1:
      color = "gray";
      break;
    case 2:
      color = "red";
      break;
    case 3:
      color = "orange";
      break;
    case 4:
      color = "lime";
      break;
    case 5:
      color = "green";
      break;
    default:
      break;
  }

  const userMarker = new mapboxgl.Marker({ color: color }).setLngLat(e.lngLat).addTo(map);
  userMarkers.push(userMarker);
});
