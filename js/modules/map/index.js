/*
=========================================
GeoVision Map Module
=========================================
*/

const GeoVisionMap = {

    create() {

        GeoVision.map = L.map("map").setView(
            [
                CONFIG.DEFAULT_LOCATION.lat,
                CONFIG.DEFAULT_LOCATION.lng
            ],
            CONFIG.DEFAULT_ZOOM
        );

        L.tileLayer(CONFIG.TILE_LAYER, {

            maxZoom: CONFIG.MAX_ZOOM,

            attribution: "© OpenStreetMap"

        }).addTo(GeoVision.map);

        GeoVision.marker = L.marker([
            CONFIG.DEFAULT_LOCATION.lat,
            CONFIG.DEFAULT_LOCATION.lng
        ]).addTo(GeoVision.map);

        console.log("Map Module Loaded");

    }

};
