jQuery(function($) {
    // Asynchronously Load the map API
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBvFvfiIhKhHWHflLnqR0SX2AynX520DlQ&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    //var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        zoom: 10,
        center: {lat: 29.09, lng: -13.65}
    };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    // Multiple Markers
    var markers = [
        ['Los Hervideros',28.954165, -13.833531],
        ['Lago Verde',28.976580, -13.827474],
        ['Castillo de Santa Bárbara',29.058048, -13.550242],
        ['Valley of 1000 palms',29.127859, -13.513652],
        ['Caleta de Famara',29.115161, -13.560895],

    ];

    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Los Hervideros</h3>' +
        '<p>Where the 1730s lava flows met the Atlantic Ocean are the spectacular Los Hervideros, which translates as "boiling pots".  The lava flow is riddled with tunnels and caves. With care, it is posible to climb down into clefts in the rocks and view the power of nature at close quarters.  This is my number one favorite spot on the island.</p>' +

             '</div>'],
        ['<div class="info_content">' +
        '<h3>El Lago Verde</h3>' +
        '<p>Close to Los Hervideros is the Green Lagoon, formed within a volcanic crater, half of which has eroded away.  The crescent lake is a vivd green in certain lights, probably as a result of the micro-organisms and volcanic minerals it contains. This contrasts with the red of the crater wall, the black sand and the blue sea. To get as close as possible (the lake is roped off), approach from the south, but there is also a superb view from the village of El Golfo on the north side. </p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Castillo de Santa Bárbara</h3>' +
        '<p>Recently rebranded as the Museum of Piracy, the fortress of Santa Bárbara is constructed on top of the Guanapay volcano. Begun in the 15th century, it has a chequered history of use and abandonment.  However the winding drive to the top is worth it for the views alone.  Access to the castle and to the roof are via steep steps and it can be very windy up there. </p>' +

             '</div>'],
        ['<div class="info_content">' +
             '<h3>Valley of 1000 Palms</h3>' +
             '<p>Driving north on the LZ10 (perhaps on the way to the Mirador del Rio), a lovely vista across the village of Haria in the Valley of 1000 palms is revealed. The name derives from the practice during the 17th and 18th centuries of marking the birth of a new baby by planting palms — one for a girl and two for a boy. The road then descends into the valley by means of a series of hairpin bends. The retirement home of César Manrique on the outskirts of the village has recently opened to the public.</p>' +

                  '</div>'],
        ['<div class="info_content">' +
                  '<h3>Caleta de Famara</h3>' +
                  '<p>The magnificent beach, childhood playground of Manrique, sweeps round under the 2000ft cliffs of the Risco de Famara, which glow rose pink in the evening sun. It is a surfers paradise and there are surfing and kite schools for beginners. However, it is also possible to take a quiet stroll along the beach to view the shipwreck, watch the breakers roll in and then enjoy a meal at a fish restaurant.  It is possible to park right next to the beach.</p>' +
        '</div>'],
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
                }
        })(marker, i));

        google.maps.event.addListener(infoWindow,'closeclick',function() {
        map.setZoom(10);
        var center =  {lat: 29.05, lng: -13.6};
        map.setCenter(center);
    });




        //Resize Function
        google.maps.event.addDomListener(window, "resize", function() {
        var center =  {lat: 29.05, lng: -13.6};
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

}
}
