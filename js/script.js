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
    
    userKm = document.getElementById('km').value;     // preferisco dare valore alle variabili nella funzione per portabilità
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

    // MILESTONE 2:
    // Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente 
    // potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, 
    // andranno quindi stampati in pagina.


    // Faccio vedere i risultati
    document.getElementById('result').style.display = 'block'

    let userName = document.getElementById('name').value
    let userSurname = document.getElementById('surname').value

    document.getElementById('user-name').textContent = userName;
    document.getElementById('user-surname').textContent = userSurname;
    document.getElementById('user-km').textContent = userKm;
    document.getElementById('user-age').textContent = userYears;
    
    if(userYears > 65){
        document.getElementById('user-cost').textContent = discountElder;
    } else if (userYears < 18){
        document.getElementById('user-cost').textContent = discountYoung;
    } else {
        document.getElementById('user-cost').textContent = userCost;
    }

    console.log("Il nome dell'utente è: " + userName)
    console.log("Il cognome dell'utente è: " + userSurname)


    // Aggiungo campi separati da quelli "richiesti"
    
    // Tipo di viaggio
    let userTravelType = document.querySelector('input[name="travel-type"]:checked').value; 
    console.log("L'utente ha scelto un viaggio di tipo: " + userTravelType);

    document.getElementById('user-cost').textContent = userCost;

    if(userTravelType === 'andata e ritorno' && userYears < 18){
      
        let youngCostRound = discountYoung * 2;
        console.log("Il costo del biglietto per andata e ritorno considerando l'età è di: " + youngCostRound);
        document.getElementById('user-return').style.display = 'block';
        document.getElementById('user-return').textContent = "Costo comprensivo di ritorno: " + youngCostRound;
    
    } else if(userTravelType === 'andata e ritorno' && userYears >= 65){
        
        let elderCostRound = discountElder * 2;
        console.log("Il costo del biglietto per andata e ritorno considerando l'età è di: " + elderCostRound);
        document.getElementById('user-return').style.display = 'block';
        document.getElementById('user-return').textContent = "Costo comprensivo di ritorno: " + elderCostRound;
    
    } else {

        let userCostRound = userCost * 2;
        console.log("Il costo del biglietto per andata e ritorno è di: " + userCostRound);
        document.getElementById('user-return').style.display = 'block';
        document.getElementById('user-return').textContent = "Costo comprensivo di ritorno: " + userCostRound;

    }

    

})

// display block when 'and-home' toggled
document.getElementById('and-home').addEventListener('change', function(){
    document.getElementById('return-datetime').style.display = 'block'
    document.getElementById('label-ar').style.display = 'block'

    console.log("L'utente ha scelto il viaggio con ritorno")
})

document.getElementById('direct').addEventListener('change', function(){
    document.getElementById('return-datetime').style.display = 'none'
    document.getElementById('label-ar').style.display = 'none'

    console.log("L'utente ha scelto il viaggio di sola andata")
})


// do valore al bottone annulla 
document.getElementById('reload').addEventListener('click', function(){  
    location.reload()
})


// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS 
// in modo da renderla esteticamente gradevole.


// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone.
// Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.