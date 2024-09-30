
function moltiplicazione() {
    let age = (document.getElementById(`age`).value);
    let kilometer = (document.getElementById(`kilometer`).value);
    let priceForKm = 0.21;
    let minorDiscount = 20;
    let overDiscount = 40;


    if ((age < 65) && (age >= 18)) {
        let calc = priceForKm * kilometer;
    
        document.getElementById(`result`).innerHTML = calc.toFixed(2) + " euro";

    }else if (age >= 65){
        let calc = ((priceForKm * kilometer) - (priceForKm * kilometer) / 100 * overDiscount);
    
        document.getElementById(`result`).innerHTML = calc.toFixed(2) + " euro";

    }else if(age < 18){
        let calc = ((priceForKm * kilometer) - (priceForKm * kilometer) / 100 * minorDiscount);
    
        document.getElementById(`result`).innerHTML = calc.toFixed(2) + " euro";

    }

    
}
