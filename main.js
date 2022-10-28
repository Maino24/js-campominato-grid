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
//creo ciclo for che mi crea i 100 quadratini
for(let i = 0; i < 100; i++){
    griglia.append(creazioneQuadratino())
}