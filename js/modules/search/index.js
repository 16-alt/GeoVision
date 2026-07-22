/*
=========================================
GeoVision Search Module
Version : 0.7
=========================================
*/

const GeoVisionSearch = {

    find(cityName) {

        const text = cityName.trim();

        for (const key in cities) {

            if (cities[key].name === text) {

                return cities[key];

            }

        }

        return null;

    }

};
