function showCityInfo(city) {

    const info = document.getElementById("info");

    info.innerHTML = `
        <h2>${city.name}</h2>

        <p><b>المنطقة:</b> ${city.region}</p>

        <p><b>عدد السكان:</b> ${city.population}</p>

        <p><b>معلومة:</b> ${city.famous}</p>
    `;

}
