function raizQuadrada(numero) {
    
    if (numero < 0) {
        return "Erro: Não é possível calcular a raiz quadrada de um número negativo.";
    }
    
    
    return Math.sqrt(numero);
}


let numeroTeste = 16; 
let resultado = raizQuadrada(numeroTeste);
console.log(`A raiz quadrada de ${numeroTeste} é: ${resultado}`);
