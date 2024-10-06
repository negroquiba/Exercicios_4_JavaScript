function somaNumerosPares(lista) {
    
    let soma = 0;

    
    for (let numero of lista) {
        if (numero % 2 === 0) {
            soma += numero; 
        }
    }

    return soma;
}


let listaTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let resultado = somaNumerosPares(listaTeste);
console.log(`A soma dos números pares na lista é: ${resultado}`);
