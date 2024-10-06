function estaEmOrdemCrescente(lista) {
    
    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] > lista[i + 1]) {
            return false; 
        }
    }
    return true; 
}


let listaTeste1 = [1, 2, 3, 4, 5]; 
let listaTeste2 = [5, 3, 4, 1, 2]; 

console.log(`A lista ${listaTeste1} está em ordem crescente? ${estaEmOrdemCrescente(listaTeste1)}`);
console.log(`A lista ${listaTeste2} está em ordem crescente? ${estaEmOrdemCrescente(listaTeste2)}`);
