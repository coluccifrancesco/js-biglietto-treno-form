document.getElementById('submit').addEventListener('click', function(){
    
    // L'utente inserisce età e distanza
    let userKm = Number(document.getElementById('km').value); 
    console.log("L'utente percorrerà: " + userKm + "km");
    
    let userYears = Number(document.getElementById('years').value);
    console.log("L'utente ha: " + userYears + " anni");

    // Calcolo il costo del biglietto con tariffa standard in base all'età
    let ticketCost = costPerKmByAge(userKm, userYears).toFixed(2);
    
    // L'utente inserisce le proprie generalità
    let userName = document.getElementById('name').value;
    let userSurname = document.getElementById('surname').value;
    let userMail = document.getElementById('mail').value;
    let userPhone = document.getElementById('phone').value;

    // Calcolo il costo per qualità della classe
    let userClass = document.getElementById('class').value; 
    let costAfterClass = costByClass(ticketCost, userClass);

    // Calcolo il costo in base a viaggio diretto o andata e ritorno
    let userTravelType = document.querySelector('input[name="travel-type"]:checked').value; 
    let costDirectOrRound = costByReturnOrNot(userTravelType, costAfterClass);

    // L'utente inserisce le date
    let departureInfo = document.getElementById('departure-datetime').value;
    let returnInfo = document.getElementById('return-datetime').value;
    
    //  Le date vengono rese leggibili
    let userDeparture = departureInfo.toLocaleString('it-IT');
    let userReturn = returnInfo.toLocaleString('it-IT');

    
    // Stampo i dati raccolti ed i risultati
    console.log("Il costo del biglietto standard è di euro: " + ticketCost);
    console.log("Il nome dell'utente è: " + userName);
    console.log("Il cognome dell'utente è: " + userSurname);
    console.log("La mail dell'utente è: " + userMail);
    console.log("Il numero dell'utente è: " + userPhone);
    console.log("L'utente partirà in data: " + userDeparture);
    console.log("L'utente tonrerà in data: " + userReturn);
    console.log("L'utente ha scelto la classe " + userClass);
    console.log("Il costo dopo la scelta della classe è di euro: " + costAfterClass);
    console.log("Il viaggio " + userTravelType + " ha un costo complessivo di euro: " + costDirectOrRound);

    // Rendo i dati ed i risultati visibili
    document.getElementById('result').style.display = 'block';
    document.getElementById('user-name').textContent = userName;
    document.getElementById('user-surname').textContent = userSurname;
    document.getElementById('user-mail').textContent = userMail;
    document.getElementById('user-phone').textContent = userPhone;
    document.getElementById('user-km').textContent = 'Distanza: ' + userKm + 'km';
    document.getElementById('user-age').textContent = 'Età: ' + userYears;
    document.getElementById('user-cost').textContent = 'Costo del biglietto diretto: € ' + ticketCost;
    document.getElementById('user-departure').textContent = "Data di partenza: " + userDeparture;
    document.getElementById('user-back').style.display = 'block';
    document.getElementById('user-back').textContent = "Data di ritorno: " + userReturn;
    document.getElementById('user-class-surplus').style.display = 'block';
    document.getElementById('user-class-surplus').textContent = "Costo per la classe " + userClass + ' è: € ' + costAfterClass;
    document.getElementById('user-return').style.display = 'block';
    document.getElementById('user-return').textContent = "Il viaggio " + userTravelType + " ha un costo complessivo di: € " + costDirectOrRound;

})

function costPerKmByAge (km, age){
    if (age <= 18){
        return (km * 0.21) * 0.8;
    } else if (age >= 65){
        return (km * 0.21) * 0.6
    } else {
        return km * 0.21
    }
}

function costByClass (costo, classe){
    if(classe === 'prima'){
        return costo * 1.05;
    } else if(classe === 'premium'){
        return costo * 1.15;
    } else if(classe === 'business'){
        return costo * 1.30;
    } else {
        return costo
    }
}

function costByReturnOrNot(ritorno, costo){
    if (ritorno === 'andata e ritorno'){
        return costo * 2;
    } else {
        return costo;
    }
}

document.getElementById('and-home').addEventListener('change', function(){
    document.getElementById('return-datetime').style.display = 'block'
    document.getElementById('label-ar').style.display = 'block'

    console.log("L'utente ha scelto il viaggio con ritorno")
})

// Rendo visibile la scelta della data di ritorno
document.getElementById('direct').addEventListener('change', function(){
    document.getElementById('return-datetime').style.display = 'none'
    document.getElementById('label-ar').style.display = 'none'

    console.log("L'utente ha scelto il viaggio di sola andata")
})

// Do valore al bottone annulla 
document.getElementById('reload').addEventListener('click', function(){  
    location.reload()
})