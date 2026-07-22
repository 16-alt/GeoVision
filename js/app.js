/*
=========================================
GeoVision Application
=========================================
*/

window.addEventListener("DOMContentLoaded", () => {

    console.log("Starting GeoVision...");

    GeoVision.init();

    document
        .getElementById("locationButton")
        .addEventListener("click", () => {

            GeoVisionLocation.locate();

        });

});
