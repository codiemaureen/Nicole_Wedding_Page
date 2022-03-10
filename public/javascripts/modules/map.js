import axios from 'axios';

const mapOptions = {
    center: {lat: 42.58, lng: -82.88},
    zoom: 10
}

function loadPlaces(map, lat = 42.58, lng = -82.88) {

};

function makeMap(mapDiv){
    if(!mapDiv)return;
    const map = new google.maps.Map(mapDiv, mapOptions);
};

export default makeMap;