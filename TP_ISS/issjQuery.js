let lat = 0;
let long = 0;
let map;

jQuery(document).ready(
    function($) {

        setInterval(ajax, 1000);

        map = L.map('map').setView([lat, long], 4);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);
    }
)

function ajax() {

    $.ajax({
        url: "http://api.open-notify.org/iss-now.json",
        method: 'GET'
    })

    // $.get('http://api.open-notify.org/iss-now.json', // et mettre le code à l'intérieur)
    // ressemble au code l.22 à 25

    .done(
        (localisation) => {
            lat = localisation.iss_position.latitude;
            long = localisation.iss_position.longitude;
            $("#iss").text(localisation.iss_position.latitude);
            $("#issBis").text(localisation.iss_position.longitude);
            map.flyTo([lat, long]);

            let circle = L.circle([lat, long], {
                color: 'blue',
                fillColor: 'blue',
                fillOpacity: 0.5,
                radius: 50000,
            }).addTo(map);
        }

    );
}