//querySelector e textContent

document.querySelector('#t3').textContent='Convertendo Km --> Milhas'

function calculaKmMilha(){
    let km = document.querySelector('#valorKm').value;
    document.querySelector('#resultado').textContent = km * 1.609;
}