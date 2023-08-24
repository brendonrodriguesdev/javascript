function toConvert() {
    let distance = prompt("Digita uma distância em metros (m)");
    let result = document.getElementById('res');

    result.innerHTML = `<h2>A distância de ${distance} metros, corresponde a...</h2>`;

    let km = (Number(distance) / 1000).toLocaleString('pt-BR');
    let hm = (Number(distance) / 100).toLocaleString('pt-BR');
    let dam = (Number(distance) / 10).toLocaleString('pt-BR');
    let dm = (Number(distance) * 10).toLocaleString('pt-BR');
    let cm = (Number(distance) * 100).toLocaleString('pt-BR');
    let mm = (Number(distance) * 1000).toLocaleString('pt-BR');

    result.innerHTML += `<p>${km} quilômetros (Km)</p>`;
    result.innerHTML += `<p>${hm} hectômetros (Hm)</p>`;
    result.innerHTML += `<p>${dam} decâmetros (Hm)</p>`;
    result.innerHTML += `<p>${dm} decímetros (Hm)</p>`;
    result.innerHTML += `<p>${cm} centímetros (Cm)</p>`;
    result.innerHTML += `<p>${mm} milímetros (Mm)</p>`;
};