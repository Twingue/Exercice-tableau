
var taille = window.prompt("Saisissez la taille du tableau");
var tab = Array.apply( null, { length: taille } );
console.log(tab);
console.log(tab.length);
for(var i = 0;i<taille;i++){
var valeur = window.prompt("Saisissez les valeurs du tableau");
tab.shift()
tab.push(valeur);
}
console.log(tab);