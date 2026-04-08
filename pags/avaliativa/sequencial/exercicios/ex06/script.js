function calcular(){
    let c = Number(window.prompt("Informe sua temperatura em celsius."))
    let f = (c*9/5) + 32;
    
    let res = document.querySelector('div#res');

    res.innerHTML = `<p>Sua temperatura em graus fahrenheit é ${f}.</p>`;
}