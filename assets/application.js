// Put your applicaiton javascript here
jQuery(function() {
  var elems = jQuery(".map-container #impact-map")
  if (elems.length == 0) { return; }

  mapboxgl.accessToken = "pk.eyJ1Ijoia3VsaWt1bGkiLCJhIjoidVVYRmtybyJ9.1dQ4dawNGJpME2DuRY6ihQ";

  window.map = new mapboxgl.Map({
    container: "impact-map",
    style: "mapbox://styles/kulikuli/cjlxw8i5v4xos2smtdvyyyl7e",
    center: [ 9.895352, 2.84217 ],
    zoom: 0.8,
    doubleClickZoom: false,
  });

  map.scrollZoom.disable();
  map.boxZoom.disable();
  map.dragRotate.disable();
  // make this an arrow again. (markers are still hands)
  map.getCanvas().style.cursor = "default"

  var impactCountries = {
    mexico: [ -99.2836943, 19.39068 ],
    nicaragua: [ -87, 12 ],
    haiti: [ -72.6027977, 18.4352947 ],
    ghana: [ -3.2, 7.88 ],
    uganda: [ 31.3195382, 0.9843586 ],
    cambodia: [ 101.4617263, 12.5656792 ],
  };

  var selectedMarker = null;

  var allMarkers = []
  for (country in impactCountries) {
    coordinates = impactCountries[country];
    el = document.createElement("div");
    marker = new mapboxgl.Marker(el).setLngLat(coordinates).addTo(map);
    allMarkers.push(marker);
    jqEl = $(el);
    jqEl.addClass("impact-marker");
    jqEl.data("country", country);
    // jqEl.on("click", onMarkerClick);
    if (country === "ghana") {
      jqEl.addClass("selected");
      selectedMarker = jqEl;
    }
  }
});
