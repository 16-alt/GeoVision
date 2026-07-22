/*
=========================================
GeoVision Location Module
=========================================
*/

const GeoVisionLocation = {

    locate() {

        if (!navigator.geolocation) {

            alert("المتصفح لا يدعم تحديد الموقع.");

            return;

        }

        navigator.geolocation.getCurrentPosition(

            (position) => {

                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                GeoVision.map.setView(
                    [lat, lng],
                    CONFIG.LOCATION_ZOOM
                );

                GeoVisionMarker.move(lat, lng);

                GeoVisionMarker.popup("📍 موقعي الحالي");

                console.log("Location Loaded");

            },

            () => {

                alert("تعذر الحصول على موقعك.");

            }

        );

    }

};
