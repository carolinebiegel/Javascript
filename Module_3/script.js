jQuery(document).ready(
    function($) {
        console.log("Le document est chargé");
        $("#titre").click(
            () => {
                console.log("J'ai cliqué sur le bouton"); // fonction anonyme 
                $("#titre").text("En CDI");

                // Appel AJAX
                $.ajax({
                        url: 'https://api.chucknorris.io/jokes/random',
                        method: 'GET'
                    })
                    .done(
                        (donnees) => $("#chucknorris").text(donnees.value) // la console va lire les données de l'api et les afficher
                    );
            }
        );
    }
)