function calcChange() {
    let productName = prompt("Que produto você está comprando?");
    let valueProduct = prompt(`Quanto custa o ${productName} que você está comprando?`);
    let clientPay = prompt(`Quanto em dinheiro você pagou pelo ${productName}? `);

    let change = clientPay - valueProduct;

    alert(`Você comprou um ${productName} que custou R$${valueProduct} reais. Deu R$${clientPay} em dinheiro e vai receber R$${change} de troco. Volte sempre!`)
}