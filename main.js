let griglia = document.getElementById(`griglia`);
//console.log(griglia)

//function genera(){
    
//}

function creazioneQuadratino(){

 const divQ = document.createElement(`div`);
 divQ.classList.add(`quadrato`);
 return divQ
}

console.log(creazioneQuadratino)

//inseriamo il quadrato creato dalla funzione nella griglia
griglia.append(creazioneQuadratino())