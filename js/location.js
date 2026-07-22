function initializeLocation() {

    const locationButton = document.getElementById("locationButton");

    locationButton.addEventListener("click", function () {

        if (!navigator.geolocation) {

            alert("المتصفح لا يدعم GPS");

            return;

        }

        navigator.geolocation.getCurrentPosition(

            function (position) {

                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                map.setView([lat, lng], 16);

                marker.setLatLng([lat, lng]);

                marker.bindPopup("📍 موقعي الحالي").openPopup();

                const info = document.getElementById("info");

                info.innerHTML = `
                    <h2>📍 موقعي الحالي</h2>

                    <p><b>Latitude:</b> ${lat}</p>

                    <p><b>Longitude:</b> ${lng}</p>

                    <p>تم الحصول على موقعك بنجاح.</p>
                `;

            },

            function () {

                alert("تعذر الحصول على الموقع.");

            }

        );

    });

}
