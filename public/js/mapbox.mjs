/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYnVsaXNoIiwiYSI6ImNsaTRrcGswdzAxYjIza3FyOGkyOW5udnoifQ.zkmwatQ0bHKswdnzGJPQBA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/bulish/cli4m5sy002ik01r0cjrpdgah',
    scrollZoom: false,
    // center: [-118.11, 34.11],
    // zoom: 9,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add maker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bound to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
