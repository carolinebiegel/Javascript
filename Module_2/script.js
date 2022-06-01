// Je vais récupérer ma Div
let uneDiv = document.getElementById("maDiv");
// Je vais changer son texte 
uneDiv.innerText = "Tête de noisette";


let mesElements = document.querySelectorAll(".maClasse");
// Lorsque je récupère plusieurs éléments, je récupère un tableau et donc je boucle
for (const chaqueElement of mesElements) {
    console.log(chaqueElement);
}

let nouvelElement = document.createElement('p');
nouvelElement.innerText = "Un nouveau paragraphe créé en Javascript";

uneDiv.appendChild(nouvelElement);

function jaiClicSurLeH1() {
    uneDiv.previousElementSibling.innerHTML = "Je vais te démonter"
}