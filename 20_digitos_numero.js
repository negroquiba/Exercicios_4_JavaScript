function somaDigitos(numero) {

    let digitos = numero.toString().split('');
    
    
    let soma = digitos.reduce((acumulador, digito) => {
        return acumulador + parseInt(digito); 
    }, 0);

    return soma;
}

let numeroTeste = 1234; 
let resultado = somaDigitos(numeroTeste);
console.log(`A soma dos dígitos de ${numeroTeste} é: ${resultado}`);
