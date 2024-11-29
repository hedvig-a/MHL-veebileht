//kood on võetud Google Maps-i näidisest kaarti sisestamiseks veebilehele

function initMap() {
    const location = { lat: 58.3663, lng: 26.6908 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
        title: "My location",
    });
}