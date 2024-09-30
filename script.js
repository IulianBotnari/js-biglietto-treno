
let age = (document.getElementById(`age`));

let kilometer = (document.getElementById(`kilometer`).value);


let minorDiscount = 100 / 100 * 20;

let overDiscount = 100 / 100 * 20;

function moltiplicazione() {
    let kilometer = (document.getElementById(`kilometer`).value);
    let priceForKm = 4;
    

    let sum = priceForKm * kilometer;

    document.getElementById(`result`).innerHTML = sum;
    
}


