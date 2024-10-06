function calcularFatorial(n) {
    if (n < 0) {
        return undefined;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

console.log(calcularFatorial(5));
