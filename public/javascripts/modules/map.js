import axios from 'axios';
import { $ } from './bling';


const mapOptions = {
    center: {lat: 42.58, lng: -82.88},
    zoom: 10
}

function loadPlaces(map, lat = 42.58, lng = -82.88) {
    const places = ($('.place'));
    console.log(places.textContent);

};

function makeMap(mapDiv){
    if(!mapDiv)return;
    const map = new google.maps.Map(mapDiv, mapOptions);
    loadPlaces(map);

    const input = $('[name="geolocate"]');
    const autocomplete = new google.maps.places.Autocomplete(input);
};

export default makeMap;