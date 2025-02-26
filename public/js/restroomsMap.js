async function fetchRestrooms(latitude, longitude) {
  const numberOnPage = 10; // Number of restrooms per page
  const page = 1; // Current page
  const response = await fetch(
    `https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat=${latitude}&lng=${longitude}&per_page=${numberOnPage}&page=${page}`
  );
  const restrooms = await response.json();
  return restrooms;
}

function initMap() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 13,
      });

      const restrooms = await fetchRestrooms(latitude, longitude);

      restrooms.forEach((restroom) => {
        const marker = new google.maps.Marker({
          position: { lat: restroom.latitude, lng: restroom.longitude },
          map: map,
          title: restroom.name,
        });

        const infowindow = new google.maps.InfoWindow({
          content: `
            <div style="font-family: Arial, sans-serif; max-width: 220px; padding: 8px; line-height: 1.4;">
              <b><i class="fas fa-map-marker-alt"></i> ${
                restroom.name || "Unnamed Restroom"
              }</b><br>
              <strong><i class="fas fa-map-signs"></i> Address:</strong> ${
                restroom.street || "Not available"
              }<br>
              <strong><i class="fas fa-city"></i> City:</strong> ${
                restroom.city || "Not available"
              }<br>
              <strong><i class="fas fa-route"></i> Distance:</strong> ${
                restroom.distance
                  ? restroom.distance.toFixed(2) + " miles"
                  : "Not available"
              }<br>
              <strong><i class="fas fa-wheelchair"></i> Accessible:</strong> ${
                restroom.accessible ? "Yes" : "No"
              }<br>
              <strong><i class="fas fa-venus-mars"></i> Unisex:</strong> ${
                restroom.unisex ? "Yes" : "No"
              }<br>
              <strong><i class="fas fa-venus-mars"></i> Comment:</strong> ${
                restroom.comment || "Not available"
              }
              <br>
              <strong><i class="fas fa-venus-mars"></i> Directions:</strong> ${
                restroom.directions || "Not available"
              }
            </div>
          `,
          maxWidth: 220,
        });

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      });
    },
    (error) => {
      alert(`Unable to retrieve your location. Error: ${error.message}`);
    }
  );
}

window.onload = initMap;
