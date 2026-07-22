/*
=========================================
 GeoVision Engine
 Version : 0.7
=========================================
*/

const GeoVision = {

    version: "0.7",

    name: "GeoVision",

    map: null,

    marker: null,

    initialized: false,

    init() {

        this.map = L.map("map").setView([24.7136, 46.6753], 6);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap"
        }).addTo(this.map);

        this.marker = L.marker([24.7136, 46.6753]).addTo(this.map);

        this.initialized = true;

        console.log("GeoVision Engine Started");

    }

};

window.addEventListener("load", function () {

    GeoVision.init();

});
