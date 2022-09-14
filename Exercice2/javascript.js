function GetInteger() {
var nombre = Number(window.prompt("Saisissez un nombre"));
console.log(Number.isInteger(nombre));
return nombre;
}
GetInteger();

function InitTab(){
var taille = parseInt(window.prompt("Saisissez la taille du tableau"));
var tab = new Array(taille);
console.log(tab);
return tab;
}

var tab =InitTab();

function SaisieTab(tableau){
    for(var i = 0;i<tableau.length;i++){
        var valeur = window.prompt("Saisissez les valeurs du tableau");
        tableau.shift();
        tableau.push(valeur);
        }
        console.log(tableau);
        return tableau;
}
var tableau=SaisieTab(tab)

function AfficheTab(){
    document.write(tableau);
}
AfficheTab();

function RechercheTab(){
    let contenu = window.prompt("Ecrire le contenu à afficher");
    console.log(tableau[contenu]);
    
}
RechercheTab();

function InfoTab(){
var maximum = Math.max(...tableau);
document.write("</br> Le maximum est "+ maximum);
var truc = 0;
for (var i = 0; i <tableau.length; i++) {
 
    truc += parseInt(tableau[i], 10);
  }
 
  var moyenne = truc / tableau.length;
 
  console.log(moyenne);
document.write("</br> la moyenne du tableau est " + moyenne);

}
InfoTab();














