function ordenarListaNumeros(lista) {
    return lista.sort((a, b) => a - b);
}

const listaDesordenada = [5, 3, 8, 1, 2];
const listaOrdenada = ordenarListaNumeros(listaDesordenada);

console.log(listaOrdenada); 
