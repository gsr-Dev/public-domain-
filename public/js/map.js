window.addEventListener('load', function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NyLWRldiIsImEiOiJjazNoeGh1bDUwMmVrM2xuY25ld2F6OTUyIn0.Kxkmdsfrk0_rQMIB50yr6w';  
    let map = new mapboxgl.Map ({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [174.845122, -36.850502], 
        zoom: 12 
    });  
    let marker = new mapboxgl.Marker()
    .setLngLat([174.845122, -36.850502])
    .addTo(map);  
}); 