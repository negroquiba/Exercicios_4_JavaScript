function contarImpares(lista) {
    
    let contador = 0;

    
    for (let numero of lista) {
        if (numero % 2 !== 0) {
            contador++; 
        }
    }

    return contador; 
}


let listaTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let resultado = contarImpares(listaTeste);
console.log(`A quantidade de números ímpares na lista é: ${resultado}`);
