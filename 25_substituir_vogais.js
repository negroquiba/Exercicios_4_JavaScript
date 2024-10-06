function substituirVogais(string) {
    
    return string.replace(/[aeiouAEIOU]/g, '*');
}


let textoTeste = "Olá, como você está?"; 
let resultado = substituirVogais(textoTeste);
console.log(`Texto original: "${textoTeste}"`);
console.log(`Texto após substituição: "${resultado}"`);
