function contemSubstring(string, substring) {
    
    return string.includes(substring);
}


let textoTeste = "Olá, como você está?";
let substringTeste = "como"; 
let resultado = contemSubstring(textoTeste, substringTeste);
console.log(`A string "${textoTeste}" contém a substring "${substringTeste}"? ${resultado}`);

