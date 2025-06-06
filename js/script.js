// Scrivere un programma che chieda all’utente:

// Il numero di chilometri da percorrere
let userKm = '';

// Età del passeggero 
let userYears = '';

// Sulla base di queste informazioni calcolare il prezzo totale, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65. 

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
// realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

document.getElementById('submit').addEventListener('click', function(){
    
    userKm = document.getElementById('km').value;
    console.log("L'utente percorrerà: " + userKm + "km");
    
    userYears = document.getElementById('years').value;
    console.log("L'utente ha: " + userYears + " anni");

    let userCost = userKm * 0.21;
    
    if(userYears < 18){
        
        discountYoung = userCost * 0.8;
        console.log('Applichiamo lo sconto minori del 20%! Il costo del biglietto adesso è di: €' + discountYoung);
    
    } else if (userYears >= 65 ){
    
        discountElder = userCost * 0.6;
        console.log('Applichiamo lo sconto over 65 del 40%! Il costo del biglietto adesso è di: €' + discountElder);
    
    } else {

        console.log("Il costo del biglietto è di: € " + userCost);

    }

})


// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente 
// potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, 
// andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, 
// per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS 
// in modo da renderla esteticamente gradevole.


// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone.
// Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.