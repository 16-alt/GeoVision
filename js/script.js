const cities = {
    riyadh: {
        name: "الرياض",
        lat: 24.7136,
        lng: 46.6753,
        zoom: 12,
        region: "منطقة الرياض",
        population: "حوالي 7 ملايين نسمة",
        famous: "عاصمة المملكة العربية السعودية"
    },

    jeddah: {
        name: "جدة",
        lat: 21.5433,
        lng: 39.1728,
        zoom: 12,
        region: "منطقة مكة المكرمة",
        population: "حوالي 4.8 ملايين نسمة",
        famous: "بوابة الحرمين على البحر الأحمر"
    },

    makkah: {
        name: "مكة المكرمة",
        lat: 21.3891,
        lng: 39.8579,
        zoom: 12,
        region: "منطقة مكة المكرمة",
        population: "حوالي مليوني نسمة",
        famous: "تضم المسجد الحرام"
    },

    madinah: {
        name: "المدينة المنورة",
        lat: 24.5247,
        lng: 39.5692,
        zoom: 12,
        region: "المدينة المنورة",
        population: "حوالي 1.5 مليون نسمة",
        famous: "تضم المسجد النبوي"
    },

    dammam: {
        name: "الدمام",
        lat: 26.4207,
        lng: 50.0888,
        zoom: 12,
        region: "المنطقة الشرقية",
        population: "حوالي 1.3 مليون نسمة",
        famous: "مدينة ساحلية"
    },

    jazan: {
        name: "جيزان",
        lat: 16.8892,
        lng: 42.5511,
        zoom: 12,
        region: "جازان",
        population: "حوالي 200 ألف نسمة",
        famous: "قريبة من جزر فرسان"
    },

    abha: {
        name: "أبها",
        lat: 18.2164,
        lng: 42.5053,
        zoom: 12,
        region: "عسير",
        population: "حوالي 400 ألف نسمة",
        famous: "مدينة جبلية جميلة"
    },

    asir: {
        name: "عسير",
        lat: 18.2200,
        lng: 42.5000,
        zoom: 10,
        region: "جنوب غرب المملكة",
        population: "أكثر من مليوني نسمة",
        famous: "منطقة سياحية"
    }
};

const map = L.map("map").setView([24.7136,46.6753],6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom:19,
    attribution:"© OpenStreetMap"
}).addTo(map);

const marker=L.marker([24.7136,46.6753]).addTo(map);

const citySelect=document.getElementById("citySelect");
const searchInput=document.getElementById("searchInput");
const searchButton=document.getElementById("searchButton");
const locationButton=document.getElementById("locationButton");
const info=document.getElementById("info");

function showCity(city){

    map.setView([city.lat,city.lng],city.zoom);

    marker.setLatLng([city.lat,city.lng]);

    marker.bindPopup(city.name).openPopup();

    info.innerHTML=`
    <h2>${city.name}</h2>

    <p><b>المنطقة:</b> ${city.region}</p>

    <p><b>عدد السكان:</b> ${city.population}</p>

    <p><b>معلومة:</b> ${city.famous}</p>
    `;
}

showCity(cities.riyadh);

citySelect.addEventListener("change",function(){

    const city=cities[this.value];

    if(city){
        showCity(city);
    }

});

searchButton.addEventListener("click",function(){

    const text=searchInput.value.trim();

    for(const key in cities){

        if(cities[key].name===text){

            showCity(cities[key]);

            return;
        }

    }

    alert("المدينة غير موجودة");

});

locationButton.addEventListener("click",function(){

    if(!navigator.geolocation){

        alert("المتصفح لا يدعم GPS");

        return;
    }

    navigator.geolocation.getCurrentPosition(

        function(position){

            const lat=position.coords.latitude;

            const lng=position.coords.longitude;

            map.setView([lat,lng],16);

            marker.setLatLng([lat,lng]);

            marker.bindPopup("📍 موقعي الحالي").openPopup();

            info.innerHTML=`
            <h2>📍 موقعي الحالي</h2>

            <p><b>Latitude:</b> ${lat}</p>

            <p><b>Longitude:</b> ${lng}</p>

            <p>تم الحصول على موقعك بنجاح.</p>
            `;

        },

        function(error){

            alert("تعذر الحصول على الموقع.");

        }

    );

});
