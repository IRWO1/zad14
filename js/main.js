let a = prompt("Podaj pierwszą liczbę");
let b = prompt("Podaj drugą liczbę");
function spr(num1, num2){
    if(num1 == 20 && num2 == 20 || num1 + num2 <= 20){
    let wynik = true;
    return wynik;
    }
}
document.write(spr(a, b));