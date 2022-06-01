let phrase = "une chaine avec des lettres dans un certain ordre";
// console.log(Array.from(phrase).sort().toString().trim()); // sur une seule ligne

let unePhraseSansEspace = phrase.replace(/ /g, '');
// je tranforme la phrase en tableau 
let maPhraseDansUnTableau = Array.from(phrase);

// je trie le tableau 
maPhraseDansUnTableau.sort();

// j'affiche le tableau 
console.log(maPhraseDansUnTableau.toString());


let sentence = 'une phrase sans majuscules';
let resultat = "";
let tableauDeMot = sentence.split(" ");
for (const chaqueMot of tableauDeMot) {
    let premierCaractere = chaqueMot[0].toUpperCase();
    let lesAutresCaracteres = chaqueMot.substring(1).toLowerCase();
    let mot = premierCaractere + lesAutresCaracteres;
    resultat = resultat + " " + mot;
}

console.log(resultat.trim());


// on a un tableau vide que l'on veut remplir de chiffres allant de 0 à 99 de façon aléatoire 
// dès qu'une valeur est ajoutée au tableau, celui-ci se remet à jour avec toutes les valeurs insérées -> push()
// une fois le tableau rempli, la boucle s'arrête (do while)

let tabNbrTire = new Array(100);
tabNbrTire.fill(false);
let compteur = 0;
let hasard;
let nbTirage = 0;

do {
    hasard = Math.floor(Math.random() * 100);
    nbTirage++;
    if (tabNbrTire[hasard] === false) { // if (!tabNbrTire[hasard]) revient au même 
        compteur++;
        tabNbrTire[hasard] = true;
    }
} while (compteur < 100)
console.log("il a fallu %d tirages", nbTirage);