document.getElementById("Date").valueAsDate = new Date();

// curseur directement sur la boite Savoir
document.getElementById("Savoir").focus();

function boutonAjouter() {

    // récupérer la valeur de Savoir
    let savoir = document.getElementById("Savoir").value;

    // récupérer la valeur d'auteur
    let auteur = document.getElementById("Auteur").value;

    // récupérer la date
    let date = document.getElementById("Date").valueAsDate;

    // création d'un nouvel élément 
    let nouvelElement = document.createElement('li');
    nouvelElement.innerText = savoir + " " + auteur + " " + date;

    // qu'on va raccrocher au DOM
    document.getElementById("maListe").appendChild(nouvelElement);

    // rajouter un événement sur mon élément
    nouvelElement.addEventListener("click", supprimer);

    // vider les inputs
    document.getElementById("Savoir").value = "";
    document.getElementById("Auteur").value = "";
}

function supprimer() {
    if (confirm("Supprimer ?"))
        this.remove();
}