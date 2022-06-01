jQuery(document).ready(
    function($) {

        document.getElementById("Date").valueAsDate = new Date();

        // curseur directement sur la boite Savoir
        $("#Savoir").focus();
    }
)

function boutonAjouter() {

    // récupérer la valeur de Savoir
    let savoir = $("#Savoir").val();

    // récupérer la valeur d'auteur
    let auteur = $("#Auteur").val();

    // récupérer la date
    let date = document.getElementById("Date").valueAsDate;

    // création d'un nouvel élément 
    let nouvelElement = $("<li>" + savoir + " Par " + auteur + " " + date + "</li>");

    // qu'on va raccrocher au DOM
    $("#maListe").append(nouvelElement);

    // rajouter un événement sur mon élément
    nouvelElement.click(supprimer);

    // vider les inputs
    $("#Savoir").val("");
    $("#Auteur").val("");
}

function supprimer() {
    if (confirm("Supprimer ?"))
        this.remove();
}