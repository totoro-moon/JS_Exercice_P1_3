// prompt('Votre prénom?');
// var m = prompt("entrez votre nom");
// alert(m);


// je crée une variable prénom qui va recupérer  la saisi dans la boite de dialogue
var prénom = prompt('Votre prénom?');
//si le prénom n'est pas un nombre ou
//si le prénom est différent de null
    if(isNaN(prénom)&& prénom!=''){
    // si le  resultat s'affiche il affiche Bonjour
    alert('Bonjour!'+ '\n' + prénom );
        } else{
    alert('Entrez votre prénom, svp');
    }


// strictement egal : === 
// esperluette : &&
//pipe :||