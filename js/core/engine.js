/*
=========================================
GeoVision Core Engine
=========================================
*/

const GeoVision = {

    map: null,

    marker: null,

    initialized: false,

    init() {

        if (this.initialized) {

            return;

        }

        console.log(
            VERSION.APP_NAME +
            " " +
            VERSION.APP_VERSION
        );

        GeoVisionMap.create();

        this.initialized = true;

    }

};
