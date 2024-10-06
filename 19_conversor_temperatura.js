function celsiusParaFahrenheit(celsius) {
    
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let tempCelsius = 25;
let tempFahrenheit = celsiusParaFahrenheit(tempCelsius);
console.log(`${tempCelsius}°C é equivalente a ${tempFahrenheit}°F.`);
