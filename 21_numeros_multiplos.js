function saoMultiplos(numero1, numero2) {
    
    if (numero2 === 0) {
        return false; 
    }
    
    return numero1 % numero2 === 0;
}


let num1 = 15;
let num2 = 2;
let resultado = saoMultiplos(num1, num2);
console.log(`${num1} e ${num2} são múltiplos? ${resultado}`);
