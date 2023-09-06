function priceChange() {
    let previousPrice = prompt('Qual era o preço anterior do produto?');
    let currentPrice = prompt('Qual é o preço atual do produto?');
    let res = document.getElementById('res');

    res.innerHTML = `<h2>Analisando os valores informados</h2>`;
    res.innerHTML += `<p>O produto custava R$${Number(previousPrice).toFixed(2).replace('.',',')} agora ele custa R$${Number(currentPrice).toFixed(2).replace('.',',')}</p>`;

    if (Number(currentPrice) > Number(previousPrice)) {
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`;
        
        let increaseValue = Number(currentPrice) - Number(previousPrice); 
        res.innerHTML += `<p>O preço subiu R$${increaseValue.toFixed(2).replace('.',',')} em relação ao preço anterior.</p>`;

        let percentageUp = (increaseValue * 100) / Number(previousPrice);
        res.innerHTML += `<p>Uma variação de ${percentageUp.toString().replace('.',',')}% pra cima.</p>`;
        
    } else {
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`;
        
        let discountValue = Number(previousPrice) - Number(currentPrice);
        res.innerHTML += `<p>O preço caiu R$${discountValue.toFixed(2).replace('.',',')}</p>`;

        let percentageDown = ((Number(previousPrice) - Number(currentPrice)) / Number(previousPrice)) * 100;
        let formattedPercentage = percentageDown.toFixed(2);
        res.innerHTML += `<p>Uma variação de ${formattedPercentage.replace('.',',')}% para baixo.</p>`;
    };
};