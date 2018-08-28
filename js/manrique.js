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
        ['Jardín de Cactus', 29.080509, -13.476066],
        ['Jameos del Agua',29.157381, -13.432151],
        ['Fundación César Manrique',29.001970, -13.547519],
        ['Mirador del Rio',29.214074, -13.481091],
        ['Timanfaya National Park',29.005520, -13.752872],

    ];

    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Jardín de Cactus</h3>' +
        '<p>Cacti are not native to the Canary Islands, but were introduced as hosts for the cochineal beetle. Before artificial colourings, the blood of the beetle larvae was used as a red food dye.  The Cactus Garden is situated in the bowl of a disused quarry, in one of the last cochineal-producing areas in the Canaries. This is Manriques last big project, which was opened in 1990. The sides of the quarry are terraced and a restored traditional gofio windmill, shop and cafe with panoramic views over the garden complete the site. The floor of the quarry and the terraces are planted with over 1,000 species of cactus from around the world. </p>' +

             '</div>'],
        ['<div class="info_content">' +
        '<span>' + '<img width="55" src="./images/Jameoslogo.jpg">' +   '<h3>Jameos del Agua</h3>' +'</span>' +
        '<p>The Jameos del Agua Centre of Art, Culture and Tourism was developed by Manrique, in collaboration with the artist Jesús Soto, in the 1960s and 1970s.  The location is inside a lava tube created by the eruption of the La Corona volcano several thousand years ago.  The tube has partially collapsed, forming open areas where pools and gardens have been created. The underground salt water lagoon, Jameo Chico, is the only habitat where the blind albino crab (Munidopsis Polimorpha) is found. There is also an underground auditorium, cafe and exhibition space.  Several evenings each week the venue is opened as an entertainment venue and restaurant, with spectacular lighting.  The only drawback to visiting the Jameos is the hundreds of steps that have to be negotiated.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<span>' + '<img width="40" src="./images/CMF-logo.jpg">' + '<h3>Fundación César Manrique</h3>' + '</span>' +
        '<p>In 1968 Manrique began to build himself a home and studio on a lava flow, at Taro de Tahiche. The upper levels are inspired by local traditional architecture. He utilised naturally-formed chambers beneath the flow as living quarters which are always cool.  Other areas open to the sky were converted into a swimming pool and gardens. </p>' +
        '<p>After his death in 1992 the Foundation that bears his name opened his former home to promote the conservation and study of his art, and continue his work to ensure the built environment respects and protects the natural environment.</p>' +
        '<p>Over 300,000 people visit every year. They are able to tour his home and visit the art gallery where his work is on display</p>' +

             '</div>'],
        ['<div class="info_content">' +
          '<span>' + '<img width="55" src="./images/miradorLogo.jpg">' + '<h3>Mirador del Rio</h3>' + '</span>' +
             '<p>The Mirador  was created by César Manrique on the site of an old gun emplacement dating back to 1889 when Spain was at war with the USA over Cuba. It is located high up on the Risco de Famara cliffs in the north of the Island. The Mirador is entered by means of a curved tunnel, so that the stunning view from the huge windows is suddenly revealed. There are also several outdoor terraces overlooking the Archipiélago Chinijo Natural Reserve, which includes the island of La Graciosa and El Rio, the stretch of water where  Bethencourt anchored in 1402.</p>' +

                  '</div>'],
        ['<div class="info_content">' +
                  '<span>' + '<img width="40" src="./images/timanfayalogo.gif">' + '<h3>Timanfaya National Park</h3>' + '</span>'  +
                  '<p>In 1970 Manrique and his team began work on the tourist facilities for the National Park. The visitor centre, built on the black volcano "Isolte de Hilario", is a single storey building based on circular forms. It features wide, full-height windows which allow a panoramic view of the lava fields. The decoration features items of local rural life, such as pots and pans in the bar area. Manrique also planned the route for the bus tour, which enables the visitor to see the amazing formations of the park with the least possible visual and environmental impact. </p>' +

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
