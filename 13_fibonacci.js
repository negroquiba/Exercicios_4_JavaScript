function imprimirFibonacci(termos) {
    const fibonacci = [0, 1]; 

    for (let i = 2; i < termos; i++) {
        const proximoTermo = fibonacci[i - 1] + fibonacci[i - 2]; 
        fibonacci.push(proximoTermo);
    }

    console.log(fibonacci.slice(0, termos)); 
}

imprimirFibonacci(10); 