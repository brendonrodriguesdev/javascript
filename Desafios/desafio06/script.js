const inputButton = document.getElementById('inputButton');
inputButton.addEventListener("click", toConvert);

function toConvert() {
    let grausCelsius = prompt('Digite um temperatura em °C (Celsius)');
    let result = document.getElementById('res');
    let kelvin = (Number(grausCelsius) + 273.15).toFixed(2);
    let fahrenheit = ((Number(grausCelsius) * 1.8) + 32).toFixed(2);

    result.innerHTML = `A temperatura de ${grausCelsius}°C correspende a...<br><br> `;
    result.innerHTML += `${kelvin}°K (Kelvin)<br><br>`;
    result.innerHTML += `${fahrenheit}°F (Fahrenheit)`;
};