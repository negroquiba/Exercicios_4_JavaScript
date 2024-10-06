function isPalindromo(str) {

    const strLimpa = str.replace(/\s+/g, '').toLowerCase();
    
    
    const strInvertida = strLimpa.split('').reverse().join('');
    
    return strLimpa === strInvertida; 
}

console.log(isPalindromo("A man a plan a canal Panama")); 
console.log(isPalindromo("ola")); 
console.log(isPalindromo("Anotaram a data da maratona"));
console.log(isPalindromo("civic"));
