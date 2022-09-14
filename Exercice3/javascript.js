var tab = [5, 8, 11, 6, 1, 9, 3, 2, 4, 7,10];
function bulle(tab){
    var tri;
    do{
        tri = false;
        for(var i=0; i < tab.length-1; i++) {
            if(tab[i] > tab[i+1]) {
                var tempo = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = tempo;
                tri = true;
            }
        }
    } while(tri);
}
bulle(tab);
console.log(tab);