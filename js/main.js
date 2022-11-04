`use strict`
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const arrayNumbers = [];
while(arrayNumbers.length < 5){
    const randomNumber = getRndInteger(1,100); 
    if(!arrayNumbers.includes(randomNumber)){
        arrayNumbers.push(randomNumber);
    }   
}
let numbers = document.querySelector(".numbers");
numbers.innerHTML = arrayNumbers;
console.log(arrayNumbers);

setTimeout(function(){
    numbers.remove();
    const numeriIndovinati = [];

    for(let i = 1; i <= 5; i++){
       const userNumber = Number(prompt("Inserisci un numero"));
       if(arrayNumbers.includes(userNumber)){
            // allroa l'utente ha azzeccato uno dei numeri
            numeriIndovinati.push(userNumber);
       }
    }

    // stampare il risulato
    console.log(numeriIndovinati);
    if(numeriIndovinati.length > 0){
    alert(`Hai indovinato ${numeriIndovinati.length} numeri, i numeri indovinati sono: ${numeriIndovinati}`)
    }else{
    alert('sei schiappa')
    }
},1000);