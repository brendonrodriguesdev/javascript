function countNumbers() {
    let iniNumber = document.getElementById('initialNumber');
    let finNumber = document.getElementById("finalNumber");
    let step = document.getElementById('step');
    let res = document.getElementById('result');
    // console.log({
    //     iniNumber: iniNumber.value,
    //     finNumber: finNumber.value,
    //     step: step.value
    // })
    if (iniNumber.value == 0 || finNumber.value == 0 || step.value == 0) {
        res.innerHTML = `Impossível contar!`
    } else {
        let iNumber = Number(iniNumber.value);
        let fNumber = Number(finNumber.value);
        let nStep = Number(step.value);
        let finText = ''
        while(iNumber <= fNumber) {
            finText = finText + iNumber + ''
            iNumber += nStep
        }

        res.innerHTML = `Passo ${finText}`;
    }
}