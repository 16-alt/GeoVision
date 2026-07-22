const DEFAULT_CITY = {
    lat: 24.7136,
    lng: 46.6753,
    zoom: 6
};

const map = L.map("map").setView(
    [DEFAULT_CITY.lat, DEFAULT_CITY.lng],
    DEFAULT_CITY.zoom
);

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution: "© OpenStreetMap"
    }
).addTo(map);

const marker = L.marker([
    DEFAULT_CITY.lat,
    DEFAULT_CITY.lng
]).addTo(map);

marker.bindPopup("الرياض");
