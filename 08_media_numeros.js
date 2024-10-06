function calcularMedia(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma / lista.length;
}

console.log(calcularMedia([10, 20, 32, 40]));

