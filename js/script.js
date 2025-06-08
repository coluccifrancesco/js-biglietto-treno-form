let userKm = '';
let userYears = '';

document.getElementById('submit').addEventListener('click', function(){
    
    userKm = document.getElementById('km').value; 
    console.log("L'utente percorrerà: " + userKm + "km");
    
    userYears = document.getElementById('years').value;
    console.log("L'utente ha: " + userYears + " anni");

    let ticketCost = costPerKmByAge(userKm, userYears).toFixed(2);
    
    let userName = document.getElementById('name').value
    let userSurname = document.getElementById('surname').value
    
    let userClass = document.getElementById('class').value; 
    let costAfterClass = costByClass(ticketCost, userClass).toFixed(2);

    let userTravelType = document.querySelector('input[name="travel-type"]:checked').value; 
    let costDirectOrRound = costByReturnOrNot(userTravelType, costAfterClass).toFixed(2);
    
    console.log("Il costo del biglietto standard è di euro: " + ticketCost);
    console.log("Il nome dell'utente è: " + userName);
    console.log("Il cognome dell'utente è: " + userSurname);
    console.log("L'utente ha scelto la classe " + userClass);
    console.log("Il costo dopo la scelta della classe è di euro: " + costAfterClass);
    console.log("Il viaggio " + userTravelType + " ha un costo complessivo di euro: " + costDirectOrRound);

    document.getElementById('user-name').textContent = userName;
    document.getElementById('user-surname').textContent = userSurname;
    
    document.getElementById('user-km').textContent = 'Distanza ' +userKm;
    document.getElementById('user-age').textContent = 'Età ' +userYears;
    document.getElementById('user-cost').textContent = 'Costo biglietto diretto: € ' + ticketCost;
    
    document.getElementById('user-class-surplus').style.display = 'block';
    document.getElementById('user-class-surplus').textContent = "Costo per la classe " + userClass + ' è di: € ' + costAfterClass;
    
    document.getElementById('user-return').style.display = 'block';
    document.getElementById('user-return').textContent = "Il viaggio " + userTravelType + " ha un costo complessivo di: € " + costDirectOrRound;


    document.getElementById('result').style.display = 'block' // Risultato da mettere dopo tutti i calcoli

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

document.getElementById('direct').addEventListener('change', function(){
    document.getElementById('return-datetime').style.display = 'none'
    document.getElementById('label-ar').style.display = 'none'

    console.log("L'utente ha scelto il viaggio di sola andata")
})

// do valore al bottone annulla 
document.getElementById('reload').addEventListener('click', function(){  
    location.reload()
})