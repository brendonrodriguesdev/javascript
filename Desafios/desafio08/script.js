function calcDiscount() {
    let productName = prompt('Qual é o produto que você está comprando?');
    let productValue = prompt(`Qual é o preço do ${productName}?`);
    let result = document.getElementById('res');

    let discount10 = Number(productValue) * 0.10;
    let goPay = Number(productValue) - discount10;


    //Esse código foi gerado pelo chatGPT. Foi dado esse código em aula, porém, não lembrava heuheuheu
    result.innerHTML = `<h1>Calculando desconto de 10% para ${productName} </h1>`;
    result.innerHTML += `<p>O preço original era R$${productValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>`;
    result.innerHTML += `<p>Você acaba de ganhar R$${discount10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de desconto (-10%)</p>`;
    result.innerHTML += `No fim, você vai pagar R$${goPay.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no produto ${productName}.`;


    //Esse aqui foi eu que fiz na raça! respeita o pai! shuahsuahus
    // result.innerHTML = `<h1>Calculando desconto de 10% para ${productName} </h1>`;
    // result.innerHTML += `<p>O preço original era R$${productValue}.</p>`;
    // result.innerHTML += `<p>Você acaba de ganhar R$${discount10.toFixed(2)} de desconto (-10%)</p>`;
    // result.innerHTML += `No fim, você vai pagar R$${goPay.toFixed(2)} no produto ${productName}.`;
};