/*
=========================================
GeoVision Marker Module
=========================================
*/

const GeoVisionMarker = {

    move(lat, lng) {

        GeoVision.marker.setLatLng([lat, lng]);

    },

    popup(text) {

        GeoVision.marker.bindPopup(text).openPopup();

    }

};
