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

//somma = 0


//inseriamo il quadrato creato dalla funzione nella griglia
//creo ciclo for che mi crea i 100 quadratini
for(let i = 0; i < 100; i++){
        let elemento = creazioneQuadratino()
        console.log(elemento);
        elemento.addEventListener(`click`, function(){
            console.log(this);
            this.classList.toggle(`attivazione`)
            somma = i
            somma = somma + 1
           console.log(somma)
    })
    
    

   /* elemento.addEventListener(`click`, function(){
        console.log(this)
        this.classList.toggle(`numerazione`)
    })*/
    griglia.append(elemento)

}
