console.log("Hello World !");

let unNombre = 42;
// console.log(unNombre) ;
console.log("La variable unNombre est égale à %s.", unNombre);

console.log(addition(20, 22));

if (unNombre > 40) {
    console.log("Le nombre est supérieur à 40");
} else {
    console.log("Le nombre est inférieur à 40");
}

console.log(unNombre > 40 ? "OK" : "NON OK");

function addition(nbr1, nbr2) {
    let total = nbr1 + nbr2;
    return total;
}

let monTableau = ['Valentin', 'Eloïse', 'Caroline', 'Lamine'];
console.log(monTableau.toString());

for (const chaqueElement of monTableau) {
    console.log(chaqueElement);
}

let monAnniversaire = new Date(1997, 11, 24);
// console.log(monAnniversaire.getFullYear()); // que l'année
console.log(monAnniversaire.toLocaleDateString());

let hasard = Math.random();
// si on veut un nombre entre 0 et 99
console.log(Math.round(hasard * 100));