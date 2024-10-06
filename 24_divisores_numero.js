function encontrarDivisores(numero) {
    
    let divisores = [];

    
    if (numero < 1) {
        return "Por favor, insira um número inteiro maior que 0.";
    }

    
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i); 
        }
    }

    return divisores;
}


let numeroTeste = 28; 
let resultado = encontrarDivisores(numeroTeste);
console.log(`Os divisores de ${numeroTeste} são: ${resultado.join(', ')}`);
