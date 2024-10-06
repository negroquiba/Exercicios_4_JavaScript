function multiplicarElementos(lista) {
    
    let produto = 1;

    
    for (let numero of lista) {
        produto *= numero; 
    }

    return produto;
}


let listaTeste = [1, 2, 3, 4, 5]; 
let resultado = multiplicarElementos(listaTeste);
console.log(`O produto de todos os elementos da lista é: ${resultado}`);
