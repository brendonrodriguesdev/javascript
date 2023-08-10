function countNumbers() {
    let iniNumber = document.getElementById('initialNumber');
    let finNumber = document.getElementById("finalNumber");
    let step = document.getElementById('step');
    let res = document.getElementById('result');

    let iNumber = Number(iniNumber.value);
    let fNumber = Number(finNumber.value);
    let nStep = Number(step.value);

    if(iNumber.length === 0 || fNumber.length === 0){
        res.innerHTML = `<p>Impossível contar!</p>`
    } else {
        if(nStep.length === 0) {
            alert('Passo igual a 0. Será considerado como 1');
            nStep = 1
        } 

        res.innerHTML = `<p>Segue a sequência abaixo...</p>`
        if (iNumber < fNumber) {
            for (let i = iNumber; i <= fNumber; i += nStep) {
                res.innerHTML += ` ${i}&#128073`
            }
        } else {
            for (let i = iNumber; i >= fNumber; i -= nStep) {
                res.innerHTML += ` ${i}&#128073`
            }
        }
        
        res.innerHTML += '\u{1F3C1}';
    }
}