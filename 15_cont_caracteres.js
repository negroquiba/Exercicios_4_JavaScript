function contarCaracteres(str, caractere) {
    let contador = 0;

    for (let char of str) {
        if (char === caractere) {
            contador++;
        }
    }

    return contador;
}

console.log(contarCaracteres("Hello, World!", 'o'));  
